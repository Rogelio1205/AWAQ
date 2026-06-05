const COLABORADORES = [
    {
        nombre: 'Gobernación del Valle del Cauca',
        descripcion: 'La Gobernación del Valle del Cauca es la máxima autoridad administrativa del departamento, encargada de implementar políticas y programas para el bienestar de la población.',
        logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/logo%20gobernacion%20valle.png',
        link: '#'
    },
    {
        nombre: 'Proyecto Utopía | Universidad de la Salle',
        descripcion: 'Este proyecto es un referente de transformación territorial y agroecología con sentido social. Su modelo educativo rural se alinea con el enfoque del ICEO de fortalecer redes que promuevan justicia ambiental.',
        logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Logo%20La%20Salle.png',
        link: '#'
    },
    {
        nombre: 'Fundación Juan Castellanos',
        descripcion: 'Desde su misión, esta fundación trabaja como puente entre actores rurales y académicos, comprometida con el desarrollo rural y la justicia ambiental en los territorios.',
        logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Fundacion%20Juan%20de%20Castellanos.jpg',
        link: '#'
    },
    {
        nombre: 'Red Colombiana de Reservas Naturales',
        descripcion: 'Organización de base comunitaria que articula reservas naturales de la sociedad civil en Colombia, promoviendo la conservación de biodiversidad y el desarrollo sostenible local.',
        logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Proyectando%20Colombia.png',
        link: '#'
    },
    {
        nombre: 'Instituto de Estudios Ambientales',
        descripcion: 'Centro académico dedicado a la investigación, formación y extensión en ciencias ambientales, generando conocimiento para la toma de decisiones informadas sobre el territorio.',
        logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Shopic.png',
        link: '#'
    },
];

function crearCard(c) {
    return `
    <li class="colab-card">
        <div class="colab-card__logo-wrap">
            <img src="${c.logo}" alt="${c.nombre}" class="colab-card__logo">
        </div>
        <div>
            <h3 class="text-xl font-bold text-[#1A365D] mb-3 leading-snug">${c.nombre}</h3>
            <p class="text-gray-500 text-sm mb-4 leading-relaxed">${c.descripcion}</p>
            <a href="${c.link}" class="text-teal-600 font-bold text-sm">Saber más →</a>
        </div>
    </li>`;
}

const track = document.getElementById('colab-track');
// Se duplica la lista para que el loop sea continuo (el -50% del CSS coincide)
const html = [...COLABORADORES, ...COLABORADORES].map(crearCard).join('');
track.innerHTML = html;