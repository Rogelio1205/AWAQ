// =============================================
//  aliados.js — Traducción ES / EN
//  Ruta: assets/js/Traducciones/aliados.js
// =============================================

const translations = {
  es: {
    // Navbar
    'nav-congreso':        'El congreso',
    'nav-memoria':         'Memoria 2ICEO',
    'nav-aliados':         'Aliados',
    'nav-prensa':          'Prensa',
    'nav-marketplace':     'Marketplace',
    'nav-colabora':        'Colabora',
    'nav-asistir':         'Quiero asistir',
    'nav-mob-congreso':    'El congreso',
    'nav-mob-memoria':     'Memoria 2ICEO',
    'nav-mob-aliados':     'Aliados',
    'nav-mob-prensa':      'Prensa',
    'nav-mob-marketplace': 'Marketplace',
    'nav-mob-colabora':    'Colabora',
    'nav-mob-asistir':     'Quiero asistir',

    // Hero
    'hero-title': 'Aliados',
    'hero-desc':  'Una red de instituciones y organizaciones comprometidas <br>con el futuro de las fuentes hídricas',
    'hero-btn':   'Quiero ser aliado',

    // Organizadores
    'org-title':  'Organizadores',
    'org1-desc':  'Awaq es una organización de cooperación internacional que, desde 2019, se dedica al desarrollo de proyectos de investigación científica y conservación de ecosistemas en comunidades menos favorecidas...',
    'org1-link':  'Saber más',
    'org2-desc':  'Como Ente de Acreditación Internacional, promovemos la confianza y la transparencia en los procesos de certificación, garantizando que nuestras acreditaciones reflejen competencia y excelencia...',
    'org2-link':  'Saber más',
    'org3-desc':  'La Universidad de San Buenaventura en Cali es una institución de educación superior que se distingue por su enfoque católico y franciscano, buscando la formación integral del ser humano...',
    'org3-link':  'Saber más',

    // Socios colaboradores
    'socios-title': 'Socios Colaboradores',

    // Donación
    'donacion-title': '¡Gracias a tu donación, nadie se queda fuera!',
    'donacion-p1':    'Tu ayuda permitirá que organizaciones ambientales que no cuentan con recursos puedan asistir al 2º ICEO y formar parte de un espacio de aprendizaje, conexión y colaboración único.',
    'donacion-p2':    'El importe irá íntegramente destinado a cubrir alojamiento, transporte y dietas.',
    'donacion-btn':   'Dona ahora',

    // Redes sociales
    'social-title': '¡Pásate por nuestras Redes Sociales y síguenos!',
    'social-desc':  'Publicamos contenido acerca de la labor que hacemos, podrás conocer nuestros proyectos y a nosotros más a fondo.',

    // Footer
    'footer-escribenos':      'Escríbenos!',
    'footer-escribenos-desc': 'Pregúntanos tus dudas o haznos llegar tu feedback.',
    'footer-email-label':     'Tu e-mail *',
    'footer-requerido1':      'Requerido',
    'footer-msg-label':       'Mensaje *',
    'footer-requerido2':      'Requerido',
    'footer-send':            'Enviar',
    'footer-contact':         'Contacto',
    'footer-streaming':       'Streaming',
    'footer-redes':           'Redes Sociales',
    'footer-privacy':         'Políticas de privacidad',
    'footer-cookies':         'Políticas de Cookies',
    'footer-legal':           'Aviso Legal',
    'footer-convivencia':     'Acuerdo de convivencia',
  },

  en: {
    // Navbar
    'nav-congreso':        'The congress',
    'nav-memoria':         '2ICEO Memory',
    'nav-aliados':         'Allies',
    'nav-prensa':          'Press',
    'nav-marketplace':     'Marketplace',
    'nav-colabora':        'Collaborate',
    'nav-asistir':         'I want to attend',
    'nav-mob-congreso':    'The congress',
    'nav-mob-memoria':     '2ICEO Memory',
    'nav-mob-aliados':     'Allies',
    'nav-mob-prensa':      'Press',
    'nav-mob-marketplace': 'Marketplace',
    'nav-mob-colabora':    'Collaborate',
    'nav-mob-asistir':     'I want to attend',

    // Hero
    'hero-title': 'Allies',
    'hero-desc':  'A network of institutions and organizations committed <br>to the future of water sources',
    'hero-btn':   'I want to be an ally',

    // Organizadores
    'org-title':  'Organizers',
    'org1-desc':  'Awaq is an international cooperation organization that, since 2019, has been dedicated to developing scientific research and ecosystem conservation projects in underserved communities...',
    'org1-link':  'Learn more',
    'org2-desc':  'As an International Accreditation Body, we promote trust and transparency in certification processes, ensuring that our accreditations reflect competence and excellence...',
    'org2-link':  'Learn more',
    'org3-desc':  'The Universidad de San Buenaventura in Cali is a higher education institution distinguished by its Catholic and Franciscan approach, seeking the integral formation of the human being...',
    'org3-link':  'Learn more',

    // Socios colaboradores
    'socios-title': 'Collaborating Partners',

    // Donación
    'donacion-title': 'Thanks to your donation, no one is left out!',
    'donacion-p1':    'Your help will allow environmental organizations that lack resources to attend the 2nd ICEO and be part of a unique space for learning, connection and collaboration.',
    'donacion-p2':    'The full amount will go towards covering accommodation, transport and meals.',
    'donacion-btn':   'Donate now',

    // Redes sociales
    'social-title': 'Visit our Social Media and follow us!',
    'social-desc':  'We publish content about the work we do — you can get to know our projects and us more in depth.',

    // Footer
    'footer-escribenos':      'Write to us!',
    'footer-escribenos-desc': 'Ask us your questions or send us your feedback.',
    'footer-email-label':     'Your e-mail *',
    'footer-requerido1':      'Required',
    'footer-msg-label':       'Message *',
    'footer-requerido2':      'Required',
    'footer-send':            'Send',
    'footer-contact':         'Contact',
    'footer-streaming':       'Streaming',
    'footer-redes':           'Social Media',
    'footer-privacy':         'Privacy Policy',
    'footer-cookies':         'Cookie Policy',
    'footer-legal':           'Legal Notice',
    'footer-convivencia':     'Community Agreement',
  }
};

let currentLang = 'es';

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  document.getElementById('lang-label').textContent = currentLang.toUpperCase();
  applyTranslations(currentLang);
  updateColaboradoresLang(currentLang);
}

function applyTranslations(lang) {
  const t = translations[lang];

  // Textos con innerHTML
  const htmlIds = [
    'nav-congreso','nav-memoria','nav-aliados','nav-prensa','nav-marketplace','nav-colabora','nav-asistir',
    'nav-mob-congreso','nav-mob-memoria','nav-mob-aliados','nav-mob-prensa','nav-mob-marketplace','nav-mob-colabora','nav-mob-asistir',
    'hero-title','hero-desc','hero-btn',
    'org-title','org1-desc','org1-link','org2-desc','org2-link','org3-desc','org3-link',
    'socios-title',
    'donacion-title','donacion-p1','donacion-p2','donacion-btn',
    'social-title','social-desc',
    'footer-escribenos','footer-escribenos-desc','footer-email-label','footer-requerido1',
    'footer-msg-label','footer-requerido2','footer-send',
    'footer-contact','footer-streaming','footer-redes',
    'footer-privacy','footer-cookies','footer-legal','footer-convivencia',
  ];

  htmlIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id] !== undefined) el.innerHTML = t[id];
  });

  // Placeholders
  const placeholders = {
    'footer-email-placeholder': lang === 'es' ? 'correo@electrónico.com' : 'email@example.com',
    'footer-msg-placeholder':   lang === 'es' ? 'Click para empezar a escribir' : 'Click to start writing',
  };
  Object.entries(placeholders).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('placeholder', text);
  });
}