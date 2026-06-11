// =============================================
//  colabora.js — Sistema de traducción ES / EN
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
    "hero-title":         "Tu acción crea impacto",
    "hero-desc":          "Existen muchas formas de ser parte del 2º ICEO. Ya sea como voluntario, ponente o donante, tu presencia fortalece la red de protección ambiental más grande de la región.",
    "hero-btn-voluntario": "Ser Voluntario",
    "hero-btn-donar":      "Donar",

    // Cards
    "colab-title":   "¿Cómo quieres colaborar?",
    "vol-title":     "Voluntariado Virtual",
    "vol-desc":      "Apoya la logística digital, la comunicación y la atención a participantes antes y durante el congreso.",
    "vol-item1":     "Certificado de participación",
    "vol-item2":     "Acceso a todas las charlas",
    "vol-item3":     "Kit oficial del voluntario",
    "vol-btn":       "Postularme como voluntario/a",
    "aliado-title":  "Colabora como Aliado",
    "aliado-desc":   "Suma capacidades, recursos, patrocinio o apoyo institucional para hacer posible el 3ICEO LATAM 2027.",
    "aliado-item1":  "Visibilidad institucional",
    "aliado-item2":  "Networking con inversores",
    "aliado-item3":  "Espacio en el Marketplace",
    "aliado-btn":    "Quiero ser aliado",
    "prensa-title":  "Prensa y Medios",
    "prensa-desc":   "Solicita tu acreditación para cubrir el congreso, entrevistar vocerías y acceder a materiales de prensa.",
    "prensa-item1":  "Kit de prensa",
    "prensa-item2":  "Material gráfico y audiovisual",
    "prensa-item3":  "Sala de prensa exclusiva",
    "prensa-btn":    "Acreditarme como medio",

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
    "hero-title":          "Your action creates impact",
    "hero-desc":           "There are many ways to be part of the 2nd ICEO. Whether as a volunteer, speaker or donor, your presence strengthens the largest environmental protection network in the region.",
    "hero-btn-voluntario": "Be a Volunteer",
    "hero-btn-donar":      "Donate",

    // Cards
    "colab-title":   "How do you want to collaborate?",
    "vol-title":     "Virtual Volunteering",
    "vol-desc":      "Support digital logistics, communication and attendee care before and during the congress.",
    "vol-item1":     "Participation certificate",
    "vol-item2":     "Access to all talks",
    "vol-item3":     "Official volunteer kit",
    "vol-btn":       "Apply as a volunteer",
    "aliado-title":  "Collaborate as an Ally",
    "aliado-desc":   "Add capabilities, resources, sponsorship or institutional support to make 3ICEO LATAM 2027 possible.",
    "aliado-item1":  "Institutional visibility",
    "aliado-item2":  "Networking with investors",
    "aliado-item3":  "Space in the Marketplace",
    "aliado-btn":    "I want to be an ally",
    "prensa-title":  "Press and Media",
    "prensa-desc":   "Request your accreditation to cover the congress, interview spokespersons and access press materials.",
    "prensa-item1":  "Press kit",
    "prensa-item2":  "Graphic and audiovisual material",
    "prensa-item3":  "Exclusive press room",
    "prensa-btn":    "Accredit me as media",

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
    'hero-title','hero-desc','hero-btn-voluntario','hero-btn-donar',
    'colab-title',
    'vol-title','vol-desc','vol-item1','vol-item2','vol-item3','vol-btn',
    'aliado-title','aliado-desc','aliado-item1','aliado-item2','aliado-item3','aliado-btn',
    'prensa-title','prensa-desc','prensa-item1','prensa-item2','prensa-item3','prensa-btn',
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