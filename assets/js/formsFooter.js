// footer-form.js
// Maneja el envío del formulario de contacto del footer → Salesforce
// Mismo patrón que voluntariado: iframe oculto + form dinámico (sin redirigir la página)

document.addEventListener('DOMContentLoaded', () => {

    const form      = document.getElementById('footer-contact-form');
    const btnEnviar = document.getElementById('footer-send');
    const emailInput = document.getElementById('footer-email-input');
    const msgInput   = document.getElementById('footer-msg-input');

    if (!form) return;

    // ══════════════════════════════════════════════════════════════
    // VALIDACIÓN EN TIEMPO REAL
    // ══════════════════════════════════════════════════════════════
    function isValidEmail(val) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
    }

    function checkValidity() {
        const emailOk = emailInput.value.trim() !== '' && isValidEmail(emailInput.value);
        const msgOk   = msgInput.value.trim() !== '';
        const allOk   = emailOk && msgOk;

        if (allOk) {
            btnEnviar.removeAttribute('disabled');
            btnEnviar.classList.add('ready');
        } else {
            btnEnviar.setAttribute('disabled', true);
            btnEnviar.classList.remove('ready');
        }

        // Bordes de error en tiempo real (solo si el campo fue tocado)
        if (emailInput.dataset.touched) {
            emailInput.classList.toggle('border-red-500', !emailOk);
            emailInput.classList.toggle('border-cyan-800', emailOk);
        }
        if (msgInput.dataset.touched) {
            msgInput.classList.toggle('border-red-500', !msgOk);
            msgInput.classList.toggle('border-cyan-800', msgOk);
        }
    }

    // Marcar campo como "tocado" al salir por primera vez
    [emailInput, msgInput].forEach(el => {
        el.addEventListener('blur', () => {
            el.dataset.touched = true;
            checkValidity();
        });
        el.addEventListener('input', checkValidity);
    });

    // Estado inicial
    checkValidity();

    // ══════════════════════════════════════════════════════════════
    // ENVÍO → SALESFORCE (iframe oculto, sin redirigir la página)
    // ══════════════════════════════════════════════════════════════
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (btnEnviar.disabled) return;

        // Marcar ambos como tocados para mostrar errores si los hay
        emailInput.dataset.touched = true;
        msgInput.dataset.touched   = true;
        checkValidity();

        const emailOk = isValidEmail(emailInput.value);
        const msgOk   = msgInput.value.trim() !== '';
        if (!emailOk || !msgOk) return;

        // Feedback visual
        btnEnviar.disabled     = true;
        btnEnviar.textContent  = 'Enviando...';

        // Idioma activo (por si existe el selector de idioma)
        const idioma = document.getElementById('lang-label')?.textContent.trim() === 'EN' ? 'ENG' : 'ES';

        // Iframe oculto para absorber la respuesta de Salesforce
        const iframe = document.createElement('iframe');
        iframe.name  = 'sf-iframe-footer';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        // Form dinámico apuntando al iframe
        const sfForm   = document.createElement('form');
        sfForm.method  = 'POST';
        sfForm.action  = 'https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00D7Q0000092UMO';
        sfForm.target  = 'sf-iframe-footer';
        sfForm.style.display = 'none';

        const sfFields = {
            orgid:      '00D7Q0000092UMO',
            retURL:     'https://congreso.somosawaq.org/',
            recordType: '0127Q000000AkEQQA0',
            
            email:      emailInput.value.trim(),
            subject:    'Dudas y Contacto - 3ICEO 2027',
            description: msgInput.value.trim(),
            status:     'New',
            origin:     'Web',

            // Campos custom de Salesforce
            '00NP500000Sx2AX': 'Dudas y Contacto - 3ICEO 2027',
            '00NP500000QQ1eD': 'N/A',
            '00NP500000QQ1kf': 'N/A',
            '00NP500000QwPK1': 'N/A',
            '00NP500000QwcxB': 'N/A',
            '00NP500000Qwd6r': 'N/A',
            '00NP500000Qwap0': '+1',
            '00NP500000Su2jl': idioma,
        };

        for (const [name, value] of Object.entries(sfFields)) {
            const input = document.createElement('input');
            input.type  = 'hidden';
            input.name  = name;
            input.value = value ?? '';
            sfForm.appendChild(input);
        }

        document.body.appendChild(sfForm);
        sfForm.submit();

        // Limpiar DOM y mostrar confirmación tras envío
        setTimeout(() => {
            iframe.remove();
            sfForm.remove();
            showSuccess();
        }, 2000);
    });

    // ══════════════════════════════════════════════════════════════
    // CONFIRMACIÓN VISUAL (sin cambiar de página)
    // ══════════════════════════════════════════════════════════════
    function showSuccess() {
        form.innerHTML = `
            <div class="text-center py-6 space-y-3">
                <div class="text-4xl">✅</div>
                <p id="text-sent" class="font-bold text-white text-base">¡Mensaje enviado!</p>
                <p id="soon-contact" class="text-cyan-200 text-sm">Nos pondremos en contacto contigo pronto.</p>
            </div>
        `;
    }

});