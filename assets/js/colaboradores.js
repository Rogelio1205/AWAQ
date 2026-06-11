// ─── Datos bilingües ───────────────────────────────────────────────────────
const COLABORADORES = {
  es: [
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
  ],
  en: [
    {
      nombre: 'Gobernación del Valle del Cauca',
      descripcion: 'The Gobernación del Valle del Cauca is the highest administrative authority of the department, responsible for implementing policies and programs for the well-being of the population.',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/logo%20gobernacion%20valle.png',
      link: '#'
    },
    {
      nombre: 'Proyecto Utopía | Universidad de la Salle',
      descripcion: 'This project is a benchmark for territorial transformation and social agroecology. Its rural educational model aligns with ICEO\'s focus on strengthening networks that promote environmental justice.',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Logo%20La%20Salle.png',
      link: '#'
    },
    {
      nombre: 'Fundación Juan Castellanos',
      descripcion: 'True to its mission, this foundation works as a bridge between rural and academic stakeholders, committed to rural development and environmental justice across territories.',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Fundacion%20Juan%20de%20Castellanos.jpg',
      link: '#'
    },
    {
      nombre: 'Red Colombiana de Reservas Naturales',
      descripcion: 'A community-based organization that coordinates civil society nature reserves in Colombia, promoting biodiversity conservation and local sustainable development.',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Proyectando%20Colombia.png',
      link: '#'
    },
    {
      nombre: 'Instituto de Estudios Ambientales',
      descripcion: 'An academic center dedicated to research, education, and outreach in environmental sciences, generating knowledge to support informed territorial decision-making.',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Shopic.png',
      link: '#'
    },
  ]
};

// ─── Render ────────────────────────────────────────────────────────────────
function crearCard(c, lang) {
  const saberMas = lang === 'en' ? 'Learn more →' : 'Saber más →';
  return `
  <li class="colab-card">
      <div class="colab-card__logo-wrap">
          <img src="${c.logo}" alt="${c.nombre}" class="colab-card__logo">
      </div>
      <div>
          <h3 class="text-xl font-bold text-[#1A365D] mb-3 leading-snug">${c.nombre}</h3>
          <p class="text-gray-500 text-sm mb-4 leading-relaxed">${c.descripcion}</p>
          <a href="${c.link}" class="text-teal-600 font-bold text-sm">${saberMas}</a>
      </div>
  </li>`;
}

function renderColaboradores(lang) {
  const track = document.getElementById('colab-track');
  const lista = COLABORADORES[lang] || COLABORADORES.es;
  track.innerHTML = [...lista, ...lista].map(c => crearCard(c, lang)).join('');
}

// ─── Init + hook al toggleLang global ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderColaboradores('es');
});

// Se llama desde el toggleLang de la página (Traducciones/aliados.js o similar)
function updateColaboradoresLang(lang) {
  renderColaboradores(lang);
}