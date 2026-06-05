const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRblmOecV33sVMEr3MtvNeWEDTrw6mX2SyPrvfstBx_OVz3ZMu0HkKizG0VJjkYMYI6xTX2FIQhofXA/pub?gid=0&single=true&output=csv';

function csvToArray(str) {
    const rows = [];
    const headers = [];
    let current = '';
    let inQuotes = false;
    let row = [];
    let isHeader = true;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const next = str[i + 1];

        if (char === '"') {
            if (inQuotes && next === '"') { // comilla escapada ""
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            row.push(current);
            current = '';
        } else if ((char === '\n' || char === '\r') && !inQuotes) {
            if (char === '\r' && next === '\n') i++; // saltar \r\n
            row.push(current);
            current = '';
            if (isHeader) {
                headers.push(...row.map(h => h.trim()));
                isHeader = false;
            } else if (row.some(c => c.trim() !== '')) { // ignora filas vacías
                const obj = {};
                headers.forEach((h, idx) => obj[h] = (row[idx] || '').trim());
                rows.push(obj);
            }
            row = [];
        } else {
            current += char;
        }
    }
    // última fila si no terminó en salto de línea
    if (current !== '' || row.length > 0) {
        row.push(current);
        if (!isHeader && row.some(c => c.trim() !== '')) {
            const obj = {};
            headers.forEach((h, idx) => obj[h] = (row[idx] || '').trim());
            rows.push(obj);
        }
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