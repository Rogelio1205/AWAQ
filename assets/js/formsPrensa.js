document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    const form      = document.getElementById('prensa-form');
    const btnEnviar = document.getElementById('btn-enviar');
    const validMsg  = document.getElementById('validation-msg');

    const BASE = 'https://countriesnow.space/api/v0.1';

    function toggleDropdown(dropdown) {
        document.querySelectorAll('.loc-dropdown').forEach(d => {
            if (d !== dropdown) d.classList.add('hidden');
        });
        dropdown.classList.toggle('hidden');
    }

    function filterList(searchInput, listEl) {
        searchInput.addEventListener('input', () => {
            const q = searchInput.value.toLowerCase();
            listEl.querySelectorAll('li[data-name]').forEach(li => {
                li.style.display = li.dataset.name.toLowerCase().includes(q) ? '' : 'none';
            });
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.relative')) {
            document.querySelectorAll('.loc-dropdown').forEach(d => d.classList.add('hidden'));
        }
    });

    ['phone-dropdown', 'country-dropdown', 'state-dropdown', 'city-dropdown']
        .forEach(id => document.getElementById(id)?.classList.add('loc-dropdown'));

    // ══════════════════════════════════════════════════════════════
    // VALIDACIÓN
    // ══════════════════════════════════════════════════════════════
    function checkValidity() {
        const phoneCode  = document.getElementById('phone-code').textContent.trim();
        const countryVal = document.getElementById('country-value').value.trim();
        const termsOk    = document.getElementById('terms').checked;

        const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
        const fieldsFilled   = Array.from(requiredFields).every(el => {
            if (el.type === 'checkbox') return el.checked;
            return el.value.trim() !== '';
        });

        const phoneCountryOk = phoneCode !== '' && phoneCode !== '+--';
        const locationOk     = countryVal !== '';
        const allOk          = fieldsFilled && phoneCountryOk && locationOk && termsOk;

        if (allOk) {
            btnEnviar.classList.add('ready');
            btnEnviar.removeAttribute('disabled');
        } else {
            btnEnviar.classList.remove('ready');
            btnEnviar.setAttribute('disabled', true);
        }
        validMsg.style.opacity = allOk ? '0' : '1';
    }

    form.addEventListener('input',  checkValidity);
    form.addEventListener('change', checkValidity);

    // ══════════════════════════════════════════════════════════════
    // PAÍSES
    // ══════════════════════════════════════════════════════════════
    let allCountries = [];

    async function loadCountries() {
        try {
            const res  = await fetch(`${BASE}/countries/codes`);
            const data = await res.json();
            allCountries = data.data.sort((a, b) => a.name.localeCompare(b.name, 'es'));
            renderPhoneCountries(allCountries);
            renderLocationCountries(allCountries);
            lucide.createIcons();
        } catch (err) {
            console.warn('Error cargando países:', err);
        }
    }

    function renderPhoneCountries(list) {
        const ul = document.getElementById('phone-country-list');
        ul.innerHTML = list.map(c => `
            <li data-name="${c.name}" data-dial="${c.dial_code}" data-iso="${c.code}"
                class="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                <img src="https://flagcdn.com/w20/${c.code.toLowerCase()}.png"
                     class="w-5 h-4 object-cover rounded-sm" alt="">
                <span class="flex-grow">${c.name}</span>
                <span class="text-gray-400 font-mono text-xs">${c.dial_code}</span>
            </li>`).join('');

        ul.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => {
                document.getElementById('phone-flag').src =
                    `https://flagcdn.com/w20/${li.dataset.iso.toLowerCase()}.png`;
                document.getElementById('phone-code').textContent = li.dataset.dial;
                document.getElementById('phone-country-code-value').value = li.dataset.dial;
                document.getElementById('phone-dropdown').classList.add('hidden');
                document.getElementById('phone-search').value = '';
                checkValidity();
            });
        });
        filterList(document.getElementById('phone-search'), ul);
    }

    function renderLocationCountries(list) {
        const ul = document.getElementById('country-list');
        ul.innerHTML = list.map(c => `
            <li data-name="${c.name}" data-iso="${c.code}"
                class="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                <img src="https://flagcdn.com/w20/${c.code.toLowerCase()}.png"
                     class="w-5 h-4 object-cover rounded-sm" alt="">
                <span>${c.name}</span>
            </li>`).join('');

        ul.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => selectCountry(li.dataset.name, li.dataset.iso));
        });
        filterList(document.getElementById('country-search'), ul);
    }

    async function selectCountry(name, iso) {
        const countryLabel = document.getElementById('country-label');
        countryLabel.innerHTML = `
            <img src="https://flagcdn.com/w20/${iso.toLowerCase()}.png"
                 class="w-5 h-4 object-cover rounded-sm inline-block mr-2" alt="">
            ${name}`;
        countryLabel.classList.remove('text-gray-400');
        document.getElementById('country-value').value = name;
        document.getElementById('country-dropdown').classList.add('hidden');
        document.getElementById('location-row').classList.remove('hidden');

        document.getElementById('state-label').textContent = 'Selecciona región/estado';
        document.getElementById('state-label').classList.add('text-gray-400');
        document.getElementById('state-value').value = '';
        document.getElementById('city-label').textContent = 'Selecciona localidad';
        document.getElementById('city-label').classList.add('text-gray-400');
        document.getElementById('city-value').value = '';
        document.getElementById('state-list').innerHTML =
            '<li class="px-4 py-2 text-gray-400 italic">Cargando...</li>';

        try {
            const res = await fetch(`${BASE}/countries/states`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ country: name })
            });
            const data = await res.json();
            renderStates(data.data?.states || [], name);
        } catch {
            document.getElementById('state-list').innerHTML =
                '<li class="px-4 py-2 text-red-400 italic">Error al cargar</li>';
        }
        lucide.createIcons();
        checkValidity();
    }

    function renderStates(states, countryName) {
        const ul = document.getElementById('state-list');
        if (!states.length) {
            ul.innerHTML = '<li class="px-4 py-2 text-gray-400 italic">Sin regiones disponibles</li>';
            return;
        }
        ul.innerHTML = states.map(s => `
            <li data-name="${s.name}" class="px-4 py-2 hover:bg-gray-50 cursor-pointer text-xs">
                ${s.name}
            </li>`).join('');
        ul.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => selectState(li.dataset.name, countryName));
        });
        filterList(document.getElementById('state-search'), ul);
    }

    async function selectState(stateName, countryName) {
        document.getElementById('state-label').textContent = stateName;
        document.getElementById('state-label').classList.remove('text-gray-400');
        document.getElementById('state-value').value = stateName;
        document.getElementById('state-dropdown').classList.add('hidden');
        document.getElementById('city-label').textContent = 'Selecciona localidad';
        document.getElementById('city-label').classList.add('text-gray-400');
        document.getElementById('city-value').value = '';
        document.getElementById('city-list').innerHTML =
            '<li class="px-4 py-2 text-gray-400 italic">Cargando...</li>';

        try {
            const res = await fetch(`${BASE}/countries/state/cities`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ country: countryName, state: stateName })
            });
            const data = await res.json();
            renderCities(data.data || []);
        } catch {
            document.getElementById('city-list').innerHTML =
                '<li class="px-4 py-2 text-red-400 italic">Error al cargar</li>';
        }
        lucide.createIcons();
        checkValidity();
    }

    function renderCities(cities) {
        const ul = document.getElementById('city-list');
        if (!cities.length) {
            ul.innerHTML = '<li class="px-4 py-2 text-gray-400 italic">Sin ciudades disponibles</li>';
            return;
        }
        ul.innerHTML = cities.map(c => `
            <li data-name="${c}" class="px-4 py-2 hover:bg-gray-50 cursor-pointer text-xs">
                ${c}
            </li>`).join('');
        ul.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => {
                document.getElementById('city-label').textContent = li.dataset.name;
                document.getElementById('city-label').classList.remove('text-gray-400');
                document.getElementById('city-value').value = li.dataset.name;
                document.getElementById('city-dropdown').classList.add('hidden');
                checkValidity();
            });
        });
        filterList(document.getElementById('city-search'), ul);
    }

    // ══════════════════════════════════════════════════════════════
    // TOGGLE DROPDOWNS
    // ══════════════════════════════════════════════════════════════
    document.getElementById('phone-country-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown(document.getElementById('phone-dropdown'));
    });
    document.getElementById('country-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown(document.getElementById('country-dropdown'));
    });
    document.getElementById('state-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown(document.getElementById('state-dropdown'));
    });
    document.getElementById('city-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown(document.getElementById('city-dropdown'));
    });

    // ══════════════════════════════════════════════════════════════
    // ENVÍO → SALESFORCE (form nativo + iframe, igual que Vue)
    // ══════════════════════════════════════════════════════════════
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (btnEnviar.disabled) return;

        const formData = new FormData(form);
        const phoneCode = formData.get('phone_country_code');

        // Crear iframe oculto
        const iframe = document.createElement('iframe');
        iframe.name = 'sf-iframe-prensa';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        // Crear form nativo apuntando al iframe
        const sfForm = document.createElement('form');
        sfForm.method = 'POST';
        sfForm.action = 'https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00D7Q0000092UMO';
        sfForm.target  = 'sf-iframe-prensa';
        sfForm.style.display = 'none';

        const sfFields = {
            orgid:      '00D7Q0000092UMO',
            retURL:     'https://congreso.somosawaq.org/',
            recordType: '0127Q000000AkEQQA0',
            
            '00NP500000Su2jl': document.getElementById('lang-label')?.textContent.trim() === 'EN' ? 'ENG' : 'ES',
            name:       `${formData.get('nombre')} ${formData.get('apellidos')}`,
            email:      formData.get('email'),
            phone:      `${phoneCode} ${formData.get('telefono')}`,
            subject:    'Acreditación Prensa · 3ICEO LATAM 2027',
            status:     'New',
            origin:     'Web',

            '00NP500000Sx2AX': formData.get('00NP500000Sx2AX'),
            '00NP500000QQ1eD': formData.get('nombre'),
            '00NP500000QQ1kf': formData.get('apellidos'),
            '00NP500000Swze5': formData.get('email'),
            '00NP500000Qwap0': phoneCode,
            '00NP500000Qwd6r': `${phoneCode} ${formData.get('telefono')}`,
            '00NP500000QwPK1': formData.get('country'),
            '00NP500000QwcxB': formData.get('city'),
            '00NP500000SwzhJ': formData.get('medio'),
            '00NP500000QwPAL': formData.get('cargo'),
            '00NP500000Swziv': formData.get('sitio_web') || '',
            '00NP500000SwzpN': formData.get('tipo_colaboracion'),
            '00NP500000Swzsb': formData.get('tipo_medio'),
            '00NP500000SwzxR': formData.get('dias_cobertura'),
            '00NP500000Swzz3': formData.get('temas') || '',
            '00NP500000Sx00f': formData.get('comentarios') || '',
            '00NP500000QQ1sj': document.getElementById('terms').checked ? '1' : '',
            '00NP500000QwPNF': document.getElementById('newsletter').checked ? '1' : '',
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

        setTimeout(() => {
            iframe.remove();
            sfForm.remove();
            window.location.href = 'formularioCompletado';
        }, 2000);
    });

    // ══════════════════════════════════════════════════════════════
    // INIT
    // ══════════════════════════════════════════════════════════════
    checkValidity();
    loadCountries();
});