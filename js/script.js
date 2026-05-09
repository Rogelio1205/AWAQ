document.addEventListener("DOMContentLoaded", () => {
lucide.createIcons();

const congressForm = document.getElementById('congress-form');
const mainRadios = document.querySelectorAll('.main-option');
const allRadios = document.querySelectorAll('.custom-radio');
const btnContinuar = document.getElementById('btn-continuar');
const continuarContainer = document.getElementById('continuar-container');
const secondStep = document.getElementById('second-step');
const btnEnviar = document.getElementById('btn-enviar');
const validationMsg = document.getElementById('validation-msg');

// Inputs del paso 2 para validación
const step2Inputs = document.querySelectorAll('.step2-input');
const step2Radios = document.querySelectorAll('.step2-radio');

function updateRadioUI() {
    allRadios.forEach(r => {
        const label = r.nextElementSibling;
        const check = label.querySelector('.check-mark');
        const circle = label.querySelector('.radio-circle');

        if (r.checked) {
            if (check) check.style.opacity = '1';
            if (circle) circle.style.borderColor = '#0e7490';
            label.style.borderColor = '#0e7490';
            label.style.backgroundColor = '#f0fdff';
        } else {
            if (check) check.style.opacity = '0';
            if (circle) circle.style.borderColor = '#d1d5db';
            label.style.borderColor = '#e5e7eb';
            label.style.backgroundColor = 'white';
        }
});

// Activar botón continuar si hay opción principal elegida
const anyMainChecked = Array.from(mainRadios).some(r => r.checked);
if (anyMainChecked) {
    btnContinuar.classList.add('activo');
}

checkStep2Validity();
}

function checkStep2Validity() {
    const inputsFilled = Array.from(step2Inputs).every(input => input.value.trim() !== '');
    const radioSelected = Array.from(step2Radios).some(radio => radio.checked);
    
    if (inputsFilled && radioSelected) {
        btnEnviar.classList.add('ready');
        validationMsg.style.opacity = '0';
    } else {
        btnEnviar.classList.remove('ready');
        validationMsg.style.opacity = '1';
    }
}

allRadios.forEach(r => r.addEventListener('change', updateRadioUI));
step2Inputs.forEach(input => input.addEventListener('input', checkStep2Validity));
document.getElementById('terms')?.addEventListener('change', checkStep2Validity);

// Lógica Continuar
btnContinuar.addEventListener('click', () => {
    secondStep.classList.add('visible');
    continuarContainer.classList.add('hidden-button-container');
    setTimeout(() => {
        secondStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
});

// Lógica Enviar
congressForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (btnEnviar.classList.contains('ready')) {
        setTimeout(() => {
            window.location.href = 'formularioCompletado/index.html';
        }, 2000);
    }
});
});

// Empieza lo del forms
(async () => {
    // ── Utilidades ──────────────────────────────────────────────
    const BASE = 'https://countriesnow.space/api/v0.1'
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

    // ── Añadir clase loc-dropdown a los dropdowns ────────────────
    ['phone-dropdown','country-dropdown','state-dropdown','city-dropdown']
        .forEach(id => document.getElementById(id)?.classList.add('loc-dropdown'));

    // ── PAÍSES con código de llamada ─────────────────────────────
    let allCountries = [];

    async function loadCountries() {
        const res = await fetch(`${BASE}/countries/codes`);
        const data = await res.json();
        allCountries = data.data.sort((a, b) => a.name.localeCompare(b.name));
        renderPhoneCountries(allCountries);
        renderLocationCountries(allCountries);
    }

    // -- Teléfono: render
    function renderPhoneCountries(list) {
        const ul = document.getElementById('phone-country-list');
        ul.innerHTML = list.map(c => `
            <li data-name="${c.name}" data-dial="${c.dial_code}" data-iso="${c.code}"
                class="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                <img src="https://flagcdn.com/w20/${c.code.toLowerCase()}.png" 
                    class="w-5 h-4 object-cover rounded-sm">
                <span class="flex-grow">${c.name}</span>
                <span class="text-gray-400">${c.dial_code}</span>
            </li>`).join('');

    ul.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
            document.getElementById('phone-flag').src = `https://flagcdn.com/w20/${li.dataset.iso.toLowerCase()}.png`;
            document.getElementById('phone-code').textContent = li.dataset.dial;
            document.getElementById('phone-dropdown').classList.add('hidden');
            checkStep2Validity();
        });
    });

        filterList(document.getElementById('phone-search'), ul);
    }

    // -- Ubicación: render países
    function renderLocationCountries(list) {
        const ul = document.getElementById('country-list');
        ul.innerHTML = list.map(c => `
            <li data-name="${c.name}" data-iso="${c.code}"
                class="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                <img src="https://flagcdn.com/w20/${c.code.toLowerCase()}.png" 
                    class="w-5 h-4 object-cover rounded-sm">
                <span>${c.name}</span>
            </li>`).join('');

        ul.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => selectCountry(li.dataset.name, li.dataset.iso));
        });
        filterList(document.getElementById('country-search'), ul);
    }

    // -- Seleccionar país → cargar estados
    async function selectCountry(name, iso) {
        const countryLabel = document.getElementById('country-label');
        countryLabel.innerHTML = `<img src="https://flagcdn.com/w20/${iso.toLowerCase()}.png" class="w-5 h-4 object-cover rounded-sm inline-block mr-2">${name}`;
        countryLabel.classList.remove('text-gray-400');
        document.getElementById('country-value').value = name;
        document.getElementById('extra-fields').classList.remove('hidden');
        document.getElementById('country-dropdown').classList.add('hidden');

        // Reset estado y ciudad
        document.getElementById('state-label').textContent = 'Selecciona una región / estado';
        document.getElementById('state-label').classList.add('text-gray-400');
        document.getElementById('state-value').value = '';
        document.getElementById('city-value').value = '';

                    // Mostrar estados
        document.getElementById('location-row').classList.remove('hidden');
        document.getElementById('state-list').innerHTML = '<li class="px-4 py-2 text-gray-400 italic">Cargando...</li>';

        try {
            const res = await fetch(`${BASE}/countries/states`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ country: name })
            });
            const data = await res.json();
            const states = data.data?.states || [];
            renderStates(states, name);
        } catch {
            document.getElementById('state-list').innerHTML = '<li class="px-4 py-2 text-red-400 italic">Error al cargar</li>';
        }

        lucide.createIcons();
        checkStep2Validity();
    }

    // -- Render estados
    function renderStates(states, countryName) {
        const ul = document.getElementById('state-list');
        if (!states.length) {
            ul.innerHTML = '<li class="px-4 py-2 text-gray-400 italic">Sin regiones disponibles</li>';
            return;
        }
        ul.innerHTML = states.map(s => `
            <li data-name="${s.name}"
                class="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                ${s.name}
            </li>`).join('');

        ul.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => selectState(li.dataset.name, countryName));
        });

        filterList(document.getElementById('state-search'), ul);
    }

    // -- Seleccionar estado → cargar ciudades
    async function selectState(stateName, countryName) {
        document.getElementById('state-label').textContent = stateName;
        document.getElementById('state-label').classList.remove('text-gray-400');
        document.getElementById('state-value').value = stateName;
        document.getElementById('state-dropdown').classList.add('hidden');

        // Reset ciudad
        document.getElementById('city-label').textContent = 'Selecciona una ciudad';
        document.getElementById('city-label').classList.add('text-gray-400');
        document.getElementById('city-value').value = '';
        document.getElementById('city-list').innerHTML = '<li class="px-4 py-2 text-gray-400 italic">Cargando...</li>';

        try {
            const res = await fetch(`${BASE}/countries/state/cities`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ country: countryName, state: stateName })
            });
            const data = await res.json();
            const cities = data.data || [];
            renderCities(cities);
        } catch {
            document.getElementById('city-list').innerHTML = '<li class="px-4 py-2 text-red-400 italic">Error al cargar</li>';
        }

        lucide.createIcons();
        checkStep2Validity();
    }

    // -- Render ciudades
    function renderCities(cities) {
        const ul = document.getElementById('city-list');
        if (!cities.length) {
            ul.innerHTML = '<li class="px-4 py-2 text-gray-400 italic">Sin ciudades disponibles</li>';
            return;
        }
        ul.innerHTML = cities.map(c => `
            <li data-name="${c}"
                class="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                ${c}
            </li>`).join('');

        ul.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => {
                document.getElementById('city-label').textContent = li.dataset.name;
                document.getElementById('city-label').classList.remove('text-gray-400');
                document.getElementById('city-value').value = li.dataset.name;
                document.getElementById('city-dropdown').classList.add('hidden');
                checkStep2Validity();
            });
        });

        filterList(document.getElementById('city-search'), ul);
    }

    // ── Toggle botones ───────────────────────────────────────────
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

    // ── Emoji de bandera ─────────────────────────────────────────
    function getFlagEmoji(iso) {
        if (!iso || iso.length !== 2) return '🌐';
        return [...iso.toUpperCase()].map(c => String.fromCodePoint(0x1F1E0 - 65 + c.charCodeAt(0))).join('');
    }

    // ── Validación paso 2 (reemplaza la función del script anterior) ──
    window.checkStep2Validity = function() {
        const step2Inputs = document.querySelectorAll('.step2-input');
        const step2Radios = document.querySelectorAll('.step2-radio');
        const btnEnviar = document.getElementById('btn-enviar');
        const validationMsg = document.getElementById('validation-msg');

        const phoneCode = document.getElementById('phone-code').textContent;
        const countryVal = document.getElementById('country-value').value;

        const inputsFilled = Array.from(step2Inputs).every(i => i.value.trim() !== '');
        const radioSelected = Array.from(step2Radios).some(r => r.checked);
        const phoneCountrySelected = phoneCode !== '+--';
        const locationSelected = countryVal !== '';
        const termsAccepted = document.getElementById('terms')?.checked;

        if (inputsFilled && radioSelected && phoneCountrySelected && locationSelected && termsAccepted) {
            btnEnviar.classList.add('ready');
            validationMsg.style.opacity = '0';
        } else {
            btnEnviar.classList.remove('ready');
            validationMsg.style.opacity = '1';
        }
    }

    // ── Init ─────────────────────────────────────────────────────
    await loadCountries();
})();