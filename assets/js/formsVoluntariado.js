document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    const form      = document.getElementById('voluntariado-form');
    const btnEnviar = document.getElementById('btn-enviar');
    const validMsg  = document.getElementById('validation-msg');

    // ══════════════════════════════════════════════════════════════
    // UTILIDADES
    // ══════════════════════════════════════════════════════════════
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

    // Cerrar dropdowns al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.relative')) {
            document.querySelectorAll('.loc-dropdown').forEach(d => d.classList.add('hidden'));
        }
    });

    // Marcar todos los dropdowns de ubicación con la clase compartida
    ['phone-dropdown', 'country-dropdown', 'state-dropdown', 'city-dropdown']
        .forEach(id => document.getElementById(id)?.classList.add('loc-dropdown'));


    // ══════════════════════════════════════════════════════════════
    // VALIDACIÓN GENERAL
    // ══════════════════════════════════════════════════════════════
    function checkValidity() {
        const phoneCode  = document.getElementById('phone-code').textContent.trim();
        const countryVal = document.getElementById('country-value').value.trim();
        const termsOk    = document.getElementById('terms').checked;

        // Todos los inputs/textareas/selects con [required]
        const requiredFields = form.querySelectorAll('[required]');
        const fieldsFilled   = Array.from(requiredFields).every(el => {
            if (el.type === 'checkbox') return el.checked;
            return el.value.trim() !== '';
        });

        const phoneCountryOk = phoneCode !== '+--' && phoneCode !== '';
        const locationOk     = countryVal !== '';

        const allOk = fieldsFilled && phoneCountryOk && locationOk && termsOk;

        btnEnviar.disabled = !allOk;
        validMsg.style.opacity = allOk ? '0' : '1';
    }

    form.addEventListener('input',  checkValidity);
    form.addEventListener('change', checkValidity);


    // ══════════════════════════════════════════════════════════════
    // PAÍSES — código de teléfono + selector de ubicación
    // ══════════════════════════════════════════════════════════════
    let allCountries = [];

    async function loadCountries() {
        try {
            const res  = await fetch(`${BASE}/countries/codes`);
            const data = await res.json();
            allCountries = data.data.sort((a, b) => a.name.localeCompare(b.name, 'es'));
            renderPhoneCountries(allCountries);
            renderLocationCountries(allCountries);
        } catch (err) {
            console.warn('Error cargando países:', err);
        }
    }

    // ── Teléfono: dropdown con bandera + código ──
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
                filterList(document.getElementById('phone-search'),
                           document.getElementById('phone-country-list'));
                checkValidity();
            });
        });

        filterList(document.getElementById('phone-search'), ul);
    }

    // ── Ubicación: dropdown de país ──
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

    // ── Seleccionar país → cargar estados ──
    async function selectCountry(name, iso) {
        const countryLabel = document.getElementById('country-label');
        countryLabel.innerHTML = `
            <img src="https://flagcdn.com/w20/${iso.toLowerCase()}.png"
                 class="w-5 h-4 object-cover rounded-sm inline-block mr-2" alt="">
            ${name}`;
        countryLabel.classList.remove('text-gray-400');
        document.getElementById('country-value').value = name;
        document.getElementById('country-dropdown').classList.add('hidden');

        // Mostrar fila estado/ciudad
        document.getElementById('location-row').classList.remove('hidden');

        // Reset estado y ciudad
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

    // ── Render estados ──
    function renderStates(states, countryName) {
        const ul = document.getElementById('state-list');
        if (!states.length) {
            ul.innerHTML = '<li class="px-4 py-2 text-gray-400 italic">Sin regiones disponibles</li>';
            return;
        }
        ul.innerHTML = states.map(s => `
            <li data-name="${s.name}"
                class="px-4 py-2 hover:bg-gray-50 cursor-pointer text-xs">
                ${s.name}
            </li>`).join('');

        ul.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => selectState(li.dataset.name, countryName));
        });
        filterList(document.getElementById('state-search'), ul);
    }

    // ── Seleccionar estado → cargar ciudades ──
    async function selectState(stateName, countryName) {
        document.getElementById('state-label').textContent = stateName;
        document.getElementById('state-label').classList.remove('text-gray-400');
        document.getElementById('state-value').value = stateName;
        document.getElementById('state-dropdown').classList.add('hidden');

        // Reset ciudad
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

    // ── Render ciudades ──
    function renderCities(cities) {
        const ul = document.getElementById('city-list');
        if (!cities.length) {
            ul.innerHTML = '<li class="px-4 py-2 text-gray-400 italic">Sin ciudades disponibles</li>';
            return;
        }
        ul.innerHTML = cities.map(c => `
            <li data-name="${c}"
                class="px-4 py-2 hover:bg-gray-50 cursor-pointer text-xs">
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
    // TOGGLE BOTONES DE DROPDOWN
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
    // ENVÍO DEL FORMULARIO → SALESFORCE
    // ══════════════════════════════════════════════════════════════
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (btnEnviar.disabled) return;

        const fd = new FormData(form);

        const payload = new URLSearchParams({
            orgid:    '00D7Q0000092UMO',           // ← mismo org que el formulario base
            retURL:   'https://congreso.somosawaq.org/',



            // Campos estándar
            name:        `${fd.get('nombre')} ${fd.get('apellidos')}`,
            email:       fd.get('email'),
            phone:       `${document.getElementById('phone-country-code-value').value} ${fd.get('telefono')}`,
            subject:     '3ICEO LATAM 2027 - Postulación Voluntariado Virtual',
            description: `Experiencia: ${fd.get('experiencia')}\n\nMotivación: ${fd.get('motivacion')}`,

            // ── Campos custom — ajusta los IDs con tu equipo de backend ──
            // '00NP500000XXXXXX': fd.get('nombre'),
            // '00NP500000XXXXXX': fd.get('apellidos'),
            // '00NP500000XXXXXX': fd.get('area_colaboracion'),
            // '00NP500000XXXXXX': fd.get('disponibilidad'),
            // '00NP500000XXXXXX': fd.get('zona_horaria'),
            // '00NP500000XXXXXX': fd.get('organizacion'),
            // '00NP500000XXXXXX': fd.get('cargo'),
            // '00NP500000XXXXXX': fd.get('linkedin'),
            // '00NP500000XXXXXX': document.getElementById('country-value').value,
            // '00NP500000XXXXXX': document.getElementById('state-value').value,
            // '00NP500000XXXXXX': document.getElementById('city-value').value,
            '00NP500000QQ1sj': document.getElementById('terms').checked ? '1' : '',
        });

        fetch('https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00D7Q0000092UMO', {
            method:  'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body:    payload,
            mode:    'no-cors'
        })
        .then(() => {
            window.location.href = 'formularioCompletado.html';
        })
        .catch(() => {
            alert('Error al enviar. Intenta de nuevo.');
        });
    });


    // ══════════════════════════════════════════════════════════════
    // INIT
    // ══════════════════════════════════════════════════════════════
    checkValidity();
    loadCountries();
});