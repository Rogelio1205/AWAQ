const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRblmOecV33sVMEr3MtvNeWEDTrw6mX2SyPrvfstBx_OVz3ZMu0HkKizG0VJjkYMYI6xTX2FIQhofXA/pub?gid=0&single=true&output=csv';

const CANAL_COLORES = {
    'Radio':          'background-color:#dbeafe; color:#2563eb',
    'Streaming':      'background-color:#ccfbf1; color:#0d9488',
    'Prensa':         'background-color:#fef9c3; color:#ca8a04',
    'Redes Sociales': 'background-color:#fce7f3; color:#db2777',
    'AWAQ':           'background-color:#f3f4f6; color:#4b5563',
};

function csvToArray(str) {
    const rows = [];
    const lines = str.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        const values = [];
        let current = '';
        let inQuotes = false;
        
        for (let j = 0; j < line.length; j++) {
            const char = line[j];
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        values.push(current.trim());
        
        const obj = {};
        headers.forEach((h, idx) => {
            obj[h] = (values[idx] || '').replace(/^"|"$/g, '');
        });
        rows.push(obj);
    }
    return rows;
}

function crearTarjeta(noticia) {
    const colorEstilo = CANAL_COLORES[noticia.canal] || 'background-color:#f3f4f6; color:#4b5563';
    return `
    <div class="group cursor-pointer bg-white p-5 rounded-lg shadow-lg">
        <div class="relative overflow-hidden rounded-[2.5rem] mb-6">
            <img src="${noticia.imagen}" alt="${noticia.titulo}" 
                 class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                 onerror="this.src='https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/3ICEO/Prensa/26e83bde86d062f29cedad8d07e19d7e443eba28.jpg'">
            <span style="${colorEstilo}" class="absolute bottom-4 left-6 px-3 py-1 rounded-full text-xs font-bold uppercase">${noticia.canal}</span>
        </div>
        <h3 class="text-xl font-bold text-[#1A365D] mb-3 leading-snug">${noticia.titulo}</h3>
        <p class="text-gray-500 text-sm mb-4 line-clamp-3">${noticia.descripcion}</p>
        <div class="flex justify-between items-center">
            <span class="text-xs text-gray-400 font-medium">${noticia.fecha}</span>
            <a href="./prensa/noticias/?id=${noticia.id}" class="text-teal-600 font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all">
                Ver noticia <i data-lucide="arrow-right" class="w-3 h-3"></i>
            </a>
        </div>
    </div>`;
}

async function cargarNoticias() {
    const grid = document.getElementById('noticias-grid');
    try {
        const res = await fetch(SHEET_CSV_URL);
        const csv = await res.text();
        const noticias = csvToArray(csv);
        noticias.sort((a, b) => Number(b.id) - Number(a.id));
        
        if (noticias.length === 0) {
            grid.innerHTML = '<div class="col-span-3 text-center py-12 text-gray-400">No hay noticias disponibles.</div>';
            return;
        }

        grid.innerHTML = noticias.map(crearTarjeta).join('');
        lucide.createIcons();
    } catch (e) {
        grid.innerHTML = '<div class="col-span-3 text-center py-12 text-gray-400">No se pudieron cargar las noticias.</div>';
    }
}

cargarNoticias();