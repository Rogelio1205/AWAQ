const COLABORADORES = {
  es: [
    {
      nombre: 'Gobernación del Valle del Cauca',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/logo%20gobernacion%20valle.png',
      link: '#'
    },
    {
      nombre: 'Proyecto Utopía | Universidad de la Salle',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Logo%20La%20Salle.png',
      link: '#'
    },
    {
      nombre: 'Fundación Juan Castellanos',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Fundacion%20Juan%20de%20Castellanos.jpg',
      link: '#'
    },
    {
      nombre: 'Red Colombiana de Reservas Naturales',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Proyectando%20Colombia.png',
      link: '#'
    },
    {
      nombre: 'Instituto de Estudios Ambientales',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Shopic.png',
      link: '#'
    },
  ],
  en: [
    {
      nombre: 'Gobernación del Valle del Cauca',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/logo%20gobernacion%20valle.png',
      link: '#'
    },
    {
      nombre: 'Proyecto Utopía | Universidad de la Salle',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Logo%20La%20Salle.png',
      link: '#'
    },
    {
      nombre: 'Fundación Juan Castellanos',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Fundacion%20Juan%20de%20Castellanos.jpg',
      link: '#'
    },
    {
      nombre: 'Red Colombiana de Reservas Naturales',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Proyectando%20Colombia.png',
      link: '#'
    },
    {
      nombre: 'Instituto de Estudios Ambientales',
      logo: 'https://pub-94aa83314f8a41088bff3c1130d43ebd.r2.dev/2%20ICEO/patrocinadores/Socios%20Colaboradores/Shopic.png',
      link: '#'
    },
  ]
};

// ─── Render ────────────────────────────────────────────────────────────────
function crearLogoCarrusel(c) {
  return `<img src="${c.logo}" class="h-16 object-contain opacity-60 hover:opacity-100 transition" alt="${c.nombre}">`;
}

function renderCarruselColaboradores(lang) {
  const track = document.getElementById('colab-track');
  const duplicate = document.getElementById('colab-track-duplicate');
  const lista = COLABORADORES[lang] || COLABORADORES.es;
  
  const html = lista.map(c => crearLogoCarrusel(c)).join('');
  track.innerHTML = html;
  duplicate.innerHTML = html;
}

// ─── Init ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCarruselColaboradores('es');
});

// Se llama desde el toggleLang global
function updateCarruselLang(lang) {
  renderCarruselColaboradores(lang);
}