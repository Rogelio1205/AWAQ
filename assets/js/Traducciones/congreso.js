// =============================================
//  congreso.js — Sistema de traducción ES / EN
// =============================================

const translations = {
  es: {
    // Navbar
    "nav-congreso":        "El congreso",
    "nav-memoria":         "Memoria 2ICEO",
    "nav-aliados":         "Aliados",
    "nav-prensa":          "Prensa",
    "nav-marketplace":     "Marketplace",
    "nav-colabora":        "Colabora",
    "nav-asistir":         "Quiero asistir",
    "nav-mob-congreso":    "El congreso",
    "nav-mob-memoria":     "Memoria 2ICEO",
    "nav-mob-aliados":     "Aliados",
    "nav-mob-prensa":      "Prensa",
    "nav-mob-marketplace": "Marketplace",
    "nav-mob-colabora":    "Colabora",
    "nav-mob-asistir":     "Quiero asistir",

    // Hero
    "hero-title":    "El Congreso",
    "hero-desc":     "Una plataforma internacional para transformar conocimiento en acción por las fuentes hídricas",
    "hero-dates":    "17, 18 y 19 de febrero 2027",
    "hero-location": "Cali, Colombia",

    // Objetivos
    "obj-title": "Objetivos",
    "obj-desc":  "Impulsar la cooperación ambiental mediante innovación, liderazgo, tecnología y participación social.",
    "obj1-title": "Analizar y actualizar el estado real de los compromisos climáticos",
    "obj1-desc":  "Revisar avances regionales y fortalecer estrategias de acción sostenible.",
    "obj2-title": "Visibilizar y fortalecer liderazgos para la justicia climática",
    "obj2-desc":  "Espacios para conectar organizaciones, activistas y tomadores de decisión.",
    "obj3-title": "Conectar comunidad, tecnología y biodiversidad",
    "obj3-desc":  "Integración entre innovación social y sostenibilidad para generar impacto ambiental.",

    // Agenda
    "agenda-title": "Agenda y líneas temáticas",
    "agenda-mes1":  "Feb", "agenda-tipo1": "Conversatorio", "agenda-item1": "Análisis de los resultados de la COP16",
    "agenda-mes2":  "Feb", "agenda-tipo2": "Workshop",      "agenda-item2": "Mujeres líderes en organizaciones ambientales",
    "agenda-mes3":  "Feb", "agenda-tipo3": "Intervención",  "agenda-item3": "Tecnología y conservación ambiental",
    "agenda-video": "VIDEO",
    "agenda-btn1":  "Ver líneas temáticas",
    "agenda-btn2":  "Ver agenda",

    // Ubicación
    "ubi-title": "Ubicación",
    "ubi-name":  "Universidad de San Buenaventura",
    "ubi-city":  "Cali, Colombia",
    "ubi-dates": "16 al 18 febrero 2027",
    "ubi-btn":   "Ver Congreso",

    // 2do ICEO
    "iceo2-title": "El 2do ICEO",
    "iceo2-p1":    "El Segundo Congreso Internacional de Organizaciones Ambientales reunió líderes, organizaciones y expertos de toda Latinoamérica.",
    "iceo2-p2":    "Durante tres días se desarrollaron paneles, networking, intervenciones y espacios de colaboración enfocados en biodiversidad y sostenibilidad.",
    "iceo2-btn":   "Ver memoria",

    // Donación
    "donacion-title": "¿Quieres ayudar?",
    "donacion-desc":  "Al donar, ayudas a fortalecer proyectos ambientales, educación sostenible y comunidades resilientes.",
    "donacion-btn1":  "Quiero asistir",
    "donacion-btn2":  "Donar",

    // Social
    "social-title": "¡Pásate por nuestras Redes Sociales y síguenos!",
    "social-desc":  "Publicamos contenido acerca de la labor que hacemos, podrás conocer nuestros proyectos y a nosotros más a fondo.",

    // Footer
    "footer-escribenos":      "Escríbenos!",
    "footer-escribenos-desc": "Pregúntanos tus dudas o haznos llegar tu feedback.",
    "footer-email-label":     "Tu e-mail *",
    "footer-requerido1":      "Requerido",
    "footer-msg-label":       "Mensaje*",
    "footer-requerido2":      "Requerido",
    "footer-send":            "Enviar",
    "footer-contact":         "Contacto",
    "footer-streaming":       "Streaming",
    "footer-privacy":         "Políticas de privacidad",
    "footer-cookies":         "Políticas de Cookies",
    "footer-legal":           "Aviso Legal",
    "footer-convivencia":     "Acuerdo de convivencia",
    "footer-email-placeholder": "correo@electrónico.com",
    "footer-msg-placeholder":   "Click para empezar a escribir",
  },

  en: {
    // Navbar
    "nav-congreso":        "The congress",
    "nav-memoria":         "2ICEO Memory",
    "nav-aliados":         "Allies",
    "nav-prensa":          "Press",
    "nav-marketplace":     "Marketplace",
    "nav-colabora":        "Collaborate",
    "nav-asistir":         "I want to attend",
    "nav-mob-congreso":    "The congress",
    "nav-mob-memoria":     "2ICEO Memory",
    "nav-mob-aliados":     "Allies",
    "nav-mob-prensa":      "Press",
    "nav-mob-marketplace": "Marketplace",
    "nav-mob-colabora":    "Collaborate",
    "nav-mob-asistir":     "I want to attend",

    // Hero
    "hero-title":    "The Congress",
    "hero-desc":     "An international platform to transform knowledge into action for water sources",
    "hero-dates":    "February 17, 18 and 19, 2027",
    "hero-location": "Cali, Colombia",

    // Objetivos
    "obj-title": "Objectives",
    "obj-desc":  "Drive environmental cooperation through innovation, leadership, technology and social participation.",
    "obj1-title": "Analyze and update the real state of climate commitments",
    "obj1-desc":  "Review regional progress and strengthen sustainable action strategies.",
    "obj2-title": "Visibility and strengthen leaderships for climate justice",
    "obj2-desc":  "Spaces to connect organizations, activists and decision makers.",
    "obj3-title": "Connect community, technology and biodiversity",
    "obj3-desc":  "Integration between social innovation and sustainability to generate environmental impact.",

    // Agenda
    "agenda-title": "Agenda and thematic lines",
    "agenda-mes1":  "Feb", "agenda-tipo1": "Panel",        "agenda-item1": "Analysis of COP16 results",
    "agenda-mes2":  "Feb", "agenda-tipo2": "Workshop",     "agenda-item2": "Women leaders in environmental organizations",
    "agenda-mes3":  "Feb", "agenda-tipo3": "Intervention", "agenda-item3": "Technology and environmental conservation",
    "agenda-video": "VIDEO",
    "agenda-btn1":  "View thematic lines",
    "agenda-btn2":  "View agenda",

    // Ubicación
    "ubi-title": "Location",
    "ubi-name":  "Universidad de San Buenaventura",
    "ubi-city":  "Cali, Colombia",
    "ubi-dates": "February 16 to 18, 2027",
    "ubi-btn":   "View Congress",

    // 2do ICEO
    "iceo2-title": "The 2nd ICEO",
    "iceo2-p1":    "The Second International Congress of Environmental Organizations brought together leaders, organizations and experts from across Latin America.",
    "iceo2-p2":    "Over three days, panels, networking, interventions and collaboration spaces focused on biodiversity and sustainability were held.",
    "iceo2-btn":   "View memory",

    // Donación
    "donacion-title": "Want to help?",
    "donacion-desc":  "By donating, you help strengthen environmental projects, sustainable education and resilient communities.",
    "donacion-btn1":  "I want to attend",
    "donacion-btn2":  "Donate",

    // Social
    "social-title": "Visit our Social Media and follow us!",
    "social-desc":  "We publish content about the work we do, you can get to know our projects and us better.",

    // Footer
    "footer-escribenos":      "Write to us!",
    "footer-escribenos-desc": "Ask us your questions or send us your feedback.",
    "footer-email-label":     "Your e-mail *",
    "footer-requerido1":      "Required",
    "footer-msg-label":       "Message*",
    "footer-requerido2":      "Required",
    "footer-send":            "Send",
    "footer-contact":         "Contact",
    "footer-streaming":       "Streaming",
    "footer-privacy":         "Privacy Policy",
    "footer-cookies":         "Cookie Policy",
    "footer-legal":           "Legal Notice",
    "footer-convivencia":     "Community Agreement",
    "footer-email-placeholder": "email@example.com",
    "footer-msg-placeholder":   "Click to start writing",
  }
};

let currentLang = 'es';

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  document.getElementById('lang-label').textContent = currentLang.toUpperCase();
  applyTranslations(currentLang);
}

function applyTranslations(lang) {
  const t = translations[lang];

  const ids = [
    'nav-congreso','nav-memoria','nav-aliados','nav-prensa','nav-marketplace','nav-colabora','nav-asistir',
    'nav-mob-congreso','nav-mob-memoria','nav-mob-aliados','nav-mob-prensa','nav-mob-marketplace','nav-mob-colabora','nav-mob-asistir',
    'hero-title','hero-desc','hero-dates','hero-location',
    'obj-title','obj-desc',
    'obj1-title','obj1-desc','obj2-title','obj2-desc','obj3-title','obj3-desc',
    'agenda-title',
    'agenda-mes1','agenda-tipo1','agenda-item1',
    'agenda-mes2','agenda-tipo2','agenda-item2',
    'agenda-mes3','agenda-tipo3','agenda-item3',
    'agenda-video','agenda-btn1','agenda-btn2',
    'ubi-title','ubi-name','ubi-city','ubi-dates','ubi-btn',
    'iceo2-title','iceo2-p1','iceo2-p2','iceo2-btn',
    'donacion-title','donacion-desc','donacion-btn1','donacion-btn2',
    'social-title','social-desc',
    'footer-escribenos','footer-escribenos-desc','footer-email-label','footer-requerido1',
    'footer-msg-label','footer-requerido2','footer-send',
    'footer-contact','footer-streaming',
    'footer-privacy','footer-cookies','footer-legal','footer-convivencia',
  ];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id] !== undefined) el.innerHTML = t[id];
  });

  ['footer-email-placeholder', 'footer-msg-placeholder'].forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id] !== undefined) el.setAttribute('placeholder', t[id]);
  });
}