// =============================================
//  Programa.js — Sistema de traducción ES / EN
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
    "hero-title": "Programa",
    "hero-desc":  "Tres días de conferencias, paneles, talleres<br> y experiencias para activar soluciones hídricas",

    // Agenda
    "agenda-title": "Agenda",
    "agenda-desc":  "Tres días para escuchar los territorios, construir soluciones y aterrizar conclusiones.",
    "tab-dia1-label": "Día 1",
    "tab-dia2-label": "Día 2",
    "tab-dia3-label": "Día 3",

    // Día 1
    "dia1-badge": "DÍA 1",
    "dia1-title": "Agua, territorios vivos y comunidades",
    "dia1-desc":  "Un primer día para comprender la situación actual de las fuentes hídricas, compartir una visión de futuro y explorar qué iniciativas hacen falta para activar soluciones desde los territorios.",
    "dia1-item1": "Apertura institucional y bienvenida",
    "dia1-item2": "Conferencia magistral: estado actual de las fuentes hídricas",
    "dia1-item3": "Panel: comunidades, biodiversidad y cultura territorial",
    "dia1-item4": "Espacio de networking y articulación",
    "dia1-item5": "Mesas o sesiones temáticas por retos del territorio",
    "dia1-item6": "Taller colaborativo: visión compartida y prioridades de acción",
    "dia1-item7": "Síntesis del Día 1",

    // Día 2
    "dia2-badge": "DÍA 2",
    "dia2-title": "Cooperación internacional al desarrollo, innovación y mundo rural",
    "dia2-desc":  "Un segundo día orientado a conectar cooperación, transferencia de conocimiento e innovación aplicada para impulsar soluciones territoriales, bioeconomía y desarrollo rural sostenible.",
    "dia2-item1": "Apertura del Día 2 y recapitulación",
    "dia2-item2": "Conferencia magistral: innovación para territorios vivos",
    "dia2-item3": "Panel: cooperación al desarrollo y alianzas Europa–LATAM",
    "dia2-item4": "Espacio de presentaciones, proyectos o pitches",
    "dia2-item5": "Mesas temáticas: universidad, territorio y tecnología aplicada",
    "dia2-item6": "Rueda de articulación y colaboración institucional",
    "dia2-item7": "Síntesis del Día 2",

    // Día 3
    "dia3-badge": "DÍA 3",
    "dia3-title": "Conclusiones",
    "dia3-desc":  "Una jornada más breve para convertir aprendizajes y acuerdos en memoria útil, conclusiones compartidas y una hoja de ruta para futuras alianzas.",
    "dia3-item1": "Apertura breve y recapitulación general",
    "dia3-item2": "Relatoría y aprendizajes clave del congreso",
    "dia3-item3": "Mesa de conclusiones y acuerdos",
    "dia3-item4": "Construcción de hoja de ruta compartida",
    "dia3-item5": "Cierre institucional y próximos pasos",

    // Ponentes
    "ponentes-title": "Conoce a nuestros ponentes",
    "ponentes-desc":  "Expertos, investigadores y líderes ambientales compartirán experiencias, investigaciones y proyectos enfocados en sostenibilidad y en la proteccion de fuentes hidricas.",
    "p1-badge": "Apertura",  "p1-desc": "Apertura en nombre de la organización promotora y presentación del Programa Awaq-BioTech.",
    "p2-badge": "Ponencia",  "p2-desc": "Presentación resultados parciales del proyecto ABT 2025 - Hoja de Ruta 2026-2027.",
    "p3-badge": "Taller",    "p3-desc": "Proyectos que dejan huella – \"Formulación de Proyectos Sociales Sostenibles\".",
    "p4-badge": "Ponencia",  "p4-desc": "Presentación componentes tecnológicos IA, Programa ABT.",
    "p5-badge": "Ponencia",  "p5-desc": "UTOPÍA: Un horizonte educativo para el cuidado, la sostenibilidad y la ecología integral.",
    "p6-badge": "Ponencia",  "p6-desc": "La experiencia del SELA en la implementación de la Agenda 2030.",
    "p7-badge": "Ponencia",  "p7-desc": "Mujeres en biodiversidad y fortalecimiento institucional: un camino para transformar realidades.",
    "p8-badge": "Ponencia",  "p8-desc": "El papel de las mujeres en el cambio climático.",
    "p9-badge": "Ponencia",  "p9-desc": "Alianza Universidad Juan de Castellanos | Proyecto ABT.",
    "p10-badge": "Ponencia", "p10-desc": "Alianza Universidad Juan de Castellanos | Proyecto ABT.",
    "p11-badge": "Ponencia", "p11-desc": "Alianza Universidad Juan de Castellanos | Proyecto ABT.",
    "p12-badge": "Ponencia", "p12-desc": "Alianza Universidad Juan de Castellanos | Proyecto ABT.",
    "p13-badge": "Ponencia", "p13-desc": "Legados y desafíos de la COP16.",

    // CTA
    "cta-title": "¿Quieres asistir al 2º ICEO?",
    "cta-desc":  "El aforo es limitado. Solicita tu plaza ahora y forma parte del congreso internacional de organizaciones ambientales más importante de Latinoamérica.",
    "cta-btn":   "SOLICITAR ASISTENCIA",

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

    // Placeholders (atributos)
    "footer-email-placeholder": "correo@electrónico.com",
    "footer-msg-placeholder":   "Click para empezar a escribir",
    "text-sent": "¡Mensaje enviado!",
    "soon-contact": "Nos pondremos en contacto contigo pronto."
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
    "hero-title": "Program",
    "hero-desc":  "Three days of conferences, panels, workshops<br> and experiences to activate water solutions",

    // Agenda
    "agenda-title": "Agenda",
    "agenda-desc":  "Three days to listen to the territories, build solutions and land conclusions.",
    "tab-dia1-label": "Day 1",
    "tab-dia2-label": "Day 2",
    "tab-dia3-label": "Day 3",

    // Day 1
    "dia1-badge": "DAY 1",
    "dia1-title": "Water, living territories and communities",
    "dia1-desc":  "A first day to understand the current situation of water sources, share a vision of the future and explore what initiatives are needed to activate solutions from the territories.",
    "dia1-item1": "Institutional opening and welcome",
    "dia1-item2": "Keynote: current state of water sources",
    "dia1-item3": "Panel: communities, biodiversity and territorial culture",
    "dia1-item4": "Networking and articulation space",
    "dia1-item5": "Thematic sessions on territorial challenges",
    "dia1-item6": "Collaborative workshop: shared vision and action priorities",
    "dia1-item7": "Day 1 synthesis",

    // Day 2
    "dia2-badge": "DAY 2",
    "dia2-title": "International development cooperation, innovation and rural world",
    "dia2-desc":  "A second day focused on connecting cooperation, knowledge transfer and applied innovation to drive territorial solutions, bioeconomy and sustainable rural development.",
    "dia2-item1": "Day 2 opening and recap",
    "dia2-item2": "Keynote: innovation for living territories",
    "dia2-item3": "Panel: development cooperation and Europe–LATAM alliances",
    "dia2-item4": "Presentations, projects and pitches space",
    "dia2-item5": "Thematic sessions: university, territory and applied technology",
    "dia2-item6": "Institutional collaboration and networking round",
    "dia2-item7": "Day 2 synthesis",

    // Day 3
    "dia3-badge": "DAY 3",
    "dia3-title": "Conclusions",
    "dia3-desc":  "A shorter day to turn learnings and agreements into useful memory, shared conclusions and a roadmap for future alliances.",
    "dia3-item1": "Brief opening and general recap",
    "dia3-item2": "Rapporteur report and key congress learnings",
    "dia3-item3": "Conclusions and agreements session",
    "dia3-item4": "Building a shared roadmap",
    "dia3-item5": "Institutional closing and next steps",

    // Speakers
    "ponentes-title": "Meet our speakers",
    "ponentes-desc":  "Experts, researchers and environmental leaders will share experiences, research and projects focused on sustainability and the protection of water sources.",
    "p1-badge": "Opening",  "p1-desc": "Opening on behalf of the organizing institution and presentation of the Awaq-BioTech Program.",
    "p2-badge": "Talk",     "p2-desc": "Presentation of partial results of the ABT 2025 project – Roadmap 2026-2027.",
    "p3-badge": "Workshop", "p3-desc": "Projects that leave a mark – \"Formulation of Sustainable Social Projects\".",
    "p4-badge": "Talk",     "p4-desc": "Presentation of AI technological components, ABT Program.",
    "p5-badge": "Talk",     "p5-desc": "UTOPÍA: An educational horizon for care, sustainability and integral ecology.",
    "p6-badge": "Talk",     "p6-desc": "SELA's experience in implementing the 2030 Agenda.",
    "p7-badge": "Talk",     "p7-desc": "Women in biodiversity and institutional strengthening: a path to transform realities.",
    "p8-badge": "Talk",     "p8-desc": "The role of women in climate change.",
    "p9-badge": "Talk",     "p9-desc": "Alliance: Universidad Juan de Castellanos | ABT Project.",
    "p10-badge": "Talk",    "p10-desc": "Alliance: Universidad Juan de Castellanos | ABT Project.",
    "p11-badge": "Talk",    "p11-desc": "Alliance: Universidad Juan de Castellanos | ABT Project.",
    "p12-badge": "Talk",    "p12-desc": "Alliance: Universidad Juan de Castellanos | ABT Project.",
    "p13-badge": "Talk",    "p13-desc": "Legacies and challenges of COP16.",

    // CTA
    "cta-title": "Want to attend the 2nd ICEO?",
    "cta-desc":  "Spots are limited. Request your place now and be part of the most important international congress of environmental organizations in Latin America.",
    "cta-btn":   "REQUEST ATTENDANCE",

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

    // Placeholders (atributos)
    "footer-email-placeholder": "email@example.com",
    "footer-msg-placeholder":   "Click to start writing",
    "text-sent": "Message sent!",
    "soon-contact": "We will contact you soon."
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

  // Traduce todos los elementos por id (innerHTML)
  const ids = [
    'nav-congreso','nav-memoria','nav-aliados','nav-prensa','nav-marketplace','nav-colabora','nav-asistir',
    'nav-mob-congreso','nav-mob-memoria','nav-mob-aliados','nav-mob-prensa','nav-mob-marketplace','nav-mob-colabora','nav-mob-asistir',
    'hero-title','hero-desc',
    'agenda-title','agenda-desc',
    'tab-dia1-label','tab-dia2-label','tab-dia3-label',
    'dia1-badge','dia1-title','dia1-desc',
    'dia1-item1','dia1-item2','dia1-item3','dia1-item4','dia1-item5','dia1-item6','dia1-item7',
    'dia2-badge','dia2-title','dia2-desc',
    'dia2-item1','dia2-item2','dia2-item3','dia2-item4','dia2-item5','dia2-item6','dia2-item7',
    'dia3-badge','dia3-title','dia3-desc',
    'dia3-item1','dia3-item2','dia3-item3','dia3-item4','dia3-item5',
    'ponentes-title','ponentes-desc',
    'p1-badge','p1-desc','p2-badge','p2-desc','p3-badge','p3-desc',
    'p4-badge','p4-desc','p5-badge','p5-desc','p6-badge','p6-desc',
    'p7-badge','p7-desc','p8-badge','p8-desc','p9-badge','p9-desc',
    'p10-badge','p10-desc','p11-badge','p11-desc','p12-badge','p12-desc','p13-badge','p13-desc',
    'cta-title','cta-desc','cta-btn',
    'social-title','social-desc',
    'footer-escribenos','footer-escribenos-desc','footer-email-label','footer-requerido1',
    'footer-msg-label','footer-requerido2','footer-send',
    'footer-contact','footer-streaming',
    'footer-privacy','footer-cookies','footer-legal','footer-convivencia', 'text-sent', 'soon-contact' 
  ];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id] !== undefined) el.innerHTML = t[id];
  });

  // Placeholders (atributo, no innerHTML)
  const placeholders = ['footer-email-placeholder', 'footer-msg-placeholder'];
  placeholders.forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id] !== undefined) el.setAttribute('placeholder', t[id]);
  });
}