// =============================================
//  prensa.js — Traducción ES / EN
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
    "hero-title": "Prensa",
    "hero-desc":  "Información oficial, materiales gráficos y recursos<br> para amplificar el mensaje del congreso",

    // Filtros
    "noticias-title":  "Entérate de las últimas noticias",
    "filter-label":    "Filtrar por:",
    "fopt-canales":    "Canales",
    "fopt-radio":      "Radio",
    "fopt-streaming":  "Streaming",
    "fopt-prensa":     "Prensa",
    "fopt-mes":        "Mes",
    "fopt-enero":      "Enero",
    "fopt-febrero":    "Febrero",
    "fopt-marzo":      "Marzo",
    "fopt-abril":      "Abril",
    "fopt-mayo":       "Mayo",
    "fopt-junio":      "Junio",
    "fopt-julio":      "Julio",
    "fopt-agosto":     "Agosto",
    "fopt-septiembre": "Septiembre",
    "fopt-octubre":    "Octubre",
    "fopt-noviembre":  "Noviembre",
    "fopt-diciembre":  "Diciembre",

    // Noticias
    "noticias-loading": "Cargando noticias...",

    // Sin resultados
    "noresult-title": "Sin resultados",
    "noresult-desc":  "Parece que no tenemos ninguna noticia con los filtros de búsqueda introducidos.",
    "noresult-btn":   "Borrar filtros",

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
    "hero-title": "Press",
    "hero-desc":  "Official information, graphic materials and resources<br> to amplify the message of the congress",

    // Filtros
    "noticias-title":  "Get the latest news",
    "filter-label":    "Filter by:",
    "fopt-canales":    "Channels",
    "fopt-radio":      "Radio",
    "fopt-streaming":  "Streaming",
    "fopt-prensa":     "Press",
    "fopt-mes":        "Month",
    "fopt-enero":      "January",
    "fopt-febrero":    "February",
    "fopt-marzo":      "March",
    "fopt-abril":      "April",
    "fopt-mayo":       "May",
    "fopt-junio":      "June",
    "fopt-julio":      "July",
    "fopt-agosto":     "August",
    "fopt-septiembre": "September",
    "fopt-octubre":    "October",
    "fopt-noviembre":  "November",
    "fopt-diciembre":  "December",

    // Noticias
    "noticias-loading": "Loading news...",

    // Sin resultados
    "noresult-title": "No results",
    "noresult-desc":  "It seems we don't have any news matching the selected filters.",
    "noresult-btn":   "Clear filters",

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
    'hero-title','hero-desc',
    'noticias-title','filter-label',
    'fopt-canales','fopt-radio','fopt-streaming','fopt-prensa',
    'fopt-mes','fopt-enero','fopt-febrero','fopt-marzo','fopt-abril','fopt-mayo','fopt-junio',
    'fopt-julio','fopt-agosto','fopt-septiembre','fopt-octubre','fopt-noviembre','fopt-diciembre',
    'noticias-loading',
    'noresult-title','noresult-desc','noresult-btn',
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

  // Título del botón de limpiar filtros
  const clearBtn = document.getElementById('filter-clear-btn');
  if (clearBtn) clearBtn.setAttribute('title', lang === 'es' ? 'Limpiar filtros' : 'Clear filters');
}