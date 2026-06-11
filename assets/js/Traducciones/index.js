// =============================================
//  index.js — Sistema de traducción ES / EN
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
    "nav-mob-aliados":     "Aliados",
    "nav-mob-prensa":      "Prensa",
    "nav-mob-marketplace": "Marketplace",
    "nav-mob-colabora":    "Colabora",
    "nav-mob-asistir":     "Quiero asistir",

    // Hero
    "hero-title":    "3rd ICEO LATAM",
    "hero-subtitle": "Una plataforma internacional para transformar conocimiento en acción por las fuentes hídricas",
    "hero-dates":    "16, 17 y 18 de Febrero",
    "hero-location": "Cali, Colombia",

    // Universidad
    "uni-name":         "Universidad de San Buenaventura",
    "uni-location":     "Cali, Colombia · Sede del 3rd ICEO",
    "uni-title":        "Un campus comprometido con el planeta",
    "uni-p1":           "La Universidad de San Buenaventura Cali se enorgullece de ser nuevamente la sede del Congreso Internacional de Organizaciones Ambientales. Nuestra institución comparte los valores de sostenibilidad, cooperación y responsabilidad ambiental que guían el ICEO.",
    "uni-p2":           "Ponemos a disposición de los asistentes nuestras instalaciones de primer nivel: auditorios equipados, espacios verdes, cafetería, parking gratuito y conectividad Wi-Fi en todo el campus.",
    "uni-quote":        "\"La educación y la acción ambiental son los pilares del cambio que nuestro planeta necesita.\"",
    "uni-quote-footer": "— Universidad de San Buenaventura, Cali",
    "uni-btn":          "Conocer la sede →",

    // Info general
    "info-title":   "Todo lo que necesitas saber",
    "card1-title":  "Fechas del evento",
    "card1-desc":   "16, 17 y 18 de febrero de 2027. Tres jornadas completas de 07:00 a 17:00h.",
    "card2-title":  "Lugar",
    "card2-desc":   "Universidad de San Buenaventura, Av. Cañasgordas, Cali, Colombia. Acceso desde Carrera 122 y Calle 15.",
    "card3-title":  "Inscripción",
    "card3-desc":   "Solicita tu plaza a través del formulario.",

    // Timeline
    "timeline-title": "📌 Fechas clave",
    "tl1-title": "Apertura de inscripciones",
    "tl1-date":  "1 de noviembre 2026",
    "tl1-desc":  "Formulario de solicitud disponible",
    "tl2-title": "Cierre de inscripciones",
    "tl2-date":  "31 de enero 2027",
    "tl2-desc":  "Plazas limitadas — ¡No esperes!",
    "tl3-title": "Confirmación de asistencia",
    "tl3-date":  "10 de febrero 2027",
    "tl3-desc":  "Envío de credenciales por e-mail",
    "tl4-title": "Inicio del congreso",
    "tl4-date":  "16 de febrero 2027 · 07:00h",
    "tl4-desc":  "Registro y apertura oficial",

    // Video
    "video-title":       "Conoce el 3rd ICEO LATAM",
    "video-desc":        "Un resumen de lo que vivirás durante los tres días del congreso más importante de organizaciones ambientales de Latinoamérica.",
    "video-placeholder": "Video de presentación 3rd ICEO LATAM",
    "video-soon":        "Próximamente",
    "video-caption":     "Descripción del video — Resumen del 3rd Congreso Internacional de Organizaciones Ambientales",

    // Legado
    "legacy-title":    "El legado del ICEO: 2025–2026",
    "legacy-desc":     "Más de 144 asistentes, 4 días de congreso, 60 organizaciones ambientales y una comunidad que sigue creciendo.",
    "manifesto-label": "2nd ICEO · Manifiesto",
    "manifesto-title": "Lee el Manifiesto del 2nd ICEO",
    "manifesto-desc":  "El documento que sintetiza el espíritu de colaboración y los compromisos adquiridos por las organizaciones ambientales en la edición anterior.",
    "manifesto-btn":   "★ Ver Manifiesto",

    // CTA
    "cta-title":       "¿Quieres asistir al<br>3rd ICEO LATAM?",
    "cta-desc":        "El aforo es limitado. Solicita tu plaza ahora y forma parte del congreso internacional de organizaciones ambientales más importante de Latinoamérica. Recibirás confirmación en menos de 24 horas.",
    "cta-btn1":        "Quiero asistir",
    "cta-btn2":        "Ver programa",
    "cta-disclaimer":  "* La solicitud no garantiza la plaza. Recibirás confirmación por e-mail.",

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

    // Placeholders
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
    "nav-mob-aliados":     "Allies",
    "nav-mob-prensa":      "Press",
    "nav-mob-marketplace": "Marketplace",
    "nav-mob-colabora":    "Collaborate",
    "nav-mob-asistir":     "I want to attend",

    // Hero
    "hero-title":    "3rd ICEO LATAM",
    "hero-subtitle": "An international platform to transform knowledge into action for water sources",
    "hero-dates":    "February 16, 17, and 18",
    "hero-location": "Cali, Colombia",

    // Universidad
    "uni-name":         "Universidad de San Buenaventura",
    "uni-location":     "Cali, Colombia · Venue of the 3rd ICEO",
    "uni-title":        "A campus committed to the planet",
    "uni-p1":           "Universidad de San Buenaventura Cali is proud to once again host the International Congress of Environmental Organizations. Our institution shares the values of sustainability, cooperation and environmental responsibility that guide the ICEO.",
    "uni-p2":           "We make our world-class facilities available to attendees: equipped auditoriums, green spaces, cafeteria, free parking and Wi-Fi connectivity throughout the campus.",
    "uni-quote":        "\"Education and environmental action are the pillars of the change our planet needs.\"",
    "uni-quote-footer": "— Universidad de San Buenaventura, Cali",
    "uni-btn":          "Explore the venue →",

    // Info general
    "info-title":  "Everything you need to know",
    "card1-title": "Event dates",
    "card1-desc":  "February 16, 17 and 18, 2027. Three full days from 07:00 to 17:00h.",
    "card2-title": "Location",
    "card2-desc":  "Universidad de San Buenaventura, Av. Cañasgordas, Cali, Colombia. Access from Carrera 122 and Calle 15.",
    "card3-title": "Registration",
    "card3-desc":  "Request your spot through the registration form.",

    // Timeline
    "timeline-title": "📌 Key dates",
    "tl1-title": "Registration opens",
    "tl1-date":  "November 1, 2026",
    "tl1-desc":  "Application form available",
    "tl2-title": "Registration closes",
    "tl2-date":  "January 31, 2027",
    "tl2-desc":  "Limited spots — Don't wait!",
    "tl3-title": "Attendance confirmation",
    "tl3-date":  "February 10, 2027",
    "tl3-desc":  "Credentials sent by e-mail",
    "tl4-title": "Congress begins",
    "tl4-date":  "February 16, 2027 · 07:00h",
    "tl4-desc":  "Registration and official opening",

    // Video
    "video-title":       "Meet the 3rd ICEO LATAM",
    "video-desc":        "A summary of what you will experience during the three days of the most important congress of environmental organizations in Latin America.",
    "video-placeholder": "3rd ICEO LATAM presentation video",
    "video-soon":        "Coming soon",
    "video-caption":     "Video description — Summary of the 3rd International Congress of Environmental Organizations",

    // Legado
    "legacy-title":    "The ICEO legacy: 2025–2026",
    "legacy-desc":     "More than 144 attendees, 4 congress days, 60 environmental organizations and a growing community.",
    "manifesto-label": "2nd ICEO · Manifesto",
    "manifesto-title": "Read the 2nd ICEO Manifesto",
    "manifesto-desc":  "The document that captures the spirit of collaboration and the commitments made by environmental organizations at the previous edition.",
    "manifesto-btn":   "★ View Manifesto",

    // CTA
    "cta-title":      "Want to attend<br>the 3rd ICEO LATAM?",
    "cta-desc":       "Spots are limited. Request your place now and be part of the most important international congress of environmental organizations in Latin America. You will receive confirmation within 24 hours.",
    "cta-btn1":       "I want to attend",
    "cta-btn2":       "View program",
    "cta-disclaimer": "* The application does not guarantee a spot. You will receive confirmation by e-mail.",

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

    // Placeholders
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
    'nav-mob-congreso','nav-mob-aliados','nav-mob-prensa','nav-mob-marketplace','nav-mob-colabora','nav-mob-asistir',
    'hero-title','hero-subtitle','hero-dates','hero-location',
    'uni-name','uni-location','uni-title','uni-p1','uni-p2','uni-quote','uni-quote-footer','uni-btn',
    'info-title',
    'card1-title','card1-desc','card2-title','card2-desc','card3-title','card3-desc',
    'timeline-title',
    'tl1-title','tl1-date','tl1-desc','tl2-title','tl2-date','tl2-desc',
    'tl3-title','tl3-date','tl3-desc','tl4-title','tl4-date','tl4-desc',
    'video-title','video-desc','video-placeholder','video-soon','video-caption',
    'legacy-title','legacy-desc','manifesto-label','manifesto-title','manifesto-desc','manifesto-btn',
    'cta-title','cta-desc','cta-btn1','cta-btn2','cta-disclaimer',
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

  // Placeholders (atributo)
  const placeholders = ['footer-email-placeholder', 'footer-msg-placeholder'];
  placeholders.forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id] !== undefined) el.setAttribute('placeholder', t[id]);
  });
}