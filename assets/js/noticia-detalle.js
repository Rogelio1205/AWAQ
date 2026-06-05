const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRblmOecV33sVMEr3MtvNeWEDTrw6mX2SyPrvfstBx_OVz3ZMu0HkKizG0VJjkYMYI6xTX2FIQhofXA/pub?gid=0&single=true&output=csv';

function csvToArray(str) {
    const rows = [];
    const lines = str.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].match(/(".*?"|[^,]+)(?=\s*,|\s*$)/g) || [];
        const obj = {};
        headers.forEach((h, idx) => {
            obj[h] = (values[idx] || '').trim().replace(/^"|"$/g, '');
        });
        rows.push(obj);
    }
    return rows;
}

async function cargarNoticia() {
    const contenedor = document.getElementById('noticia-contenido');

    // Leer el id de la URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (!id) {
        contenedor.innerHTML = '<div class="text-center py-20 text-gray-400">Noticia no encontrada.</div>';
        return;
    }

    try {
        const res = await fetch(SHEET_CSV_URL);
        const csv = await res.text();
        const noticias = csvToArray(csv);

        const noticia = noticias.find(n => n.id === id);

        if (!noticia) {
            contenedor.innerHTML = '<div class="text-center py-20 text-gray-400">Noticia no encontrada.</div>';
            return;
        }

        document.title = noticia.titulo + ' - Awaq';

        contenedor.innerHTML = `
            <span style="background-color:#ccfbf1; color:#0d9488" class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">${noticia.canal}</span>
            <h1 class="font-gloock text-[#09354E] text-4xl md:text-5xl leading-tight mb-4">${noticia.titulo}</h1>
            <p class="text-gray-400 text-sm mb-8">${noticia.fecha}</p>
            <img src="${noticia.imagen}" alt="${noticia.titulo}" class="w-full h-auto rounded-2xl shadow-md mb-8">
            <div class="text-gray-700 text-lg leading-relaxed whitespace-pre-line">${noticia.contenido || noticia.descripcion}</div>
        `;
    } catch (e) {
        contenedor.innerHTML = '<div class="text-center py-20 text-gray-400">No se pudo cargar la noticia.</div>';
    }
}

cargarNoticia();