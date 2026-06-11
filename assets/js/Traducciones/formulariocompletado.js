// =============================================
//  formularioCompletado.js — Traducción ES / EN
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

    // Success
    "success-title":  "¡Mensaje enviado con éxito!",
    "success-p1":     "Te hemos enviado una confirmación con el nº de referencia a tu e-mail: Ejemplo@ejemplo.com",
    "success-p2":     "Te responderemos en un plazo aproximado de 24h.",
    "success-p3":     "Revisa tu bandeja de entrada o spam.",
    "success-thanks": "Gracias por tu interés y ser parte del 2º ICEO.",

    // Donación
    "donacion-title": "¡Gracias a tu donación nadie, <br>se queda fuera!",
    "donacion-p1":    "Tu ayuda permitirá que organizaciones ambientales que no cuentan <br> con recursos puedan asistir al 2º ICEO y formar parte de un espacio <br> de aprendizaje, conexión y colaboración única.",
    "donacion-p2":    "El importe irá íntegramente destinado a cubrir alojamiento, <br> transporte y dietas.",

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

    // Success
    "success-title":  "Message sent successfully!",
    "success-p1":     "We have sent you a confirmation with the reference number to your e-mail: Ejemplo@ejemplo.com",
    "success-p2":     "We will get back to you within approximately 24h.",
    "success-p3":     "Check your inbox or spam folder.",
    "success-thanks": "Thank you for your interest and for being part of the 2nd ICEO.",

    // Donación
    "donacion-title": "Thanks to your donation, no one <br>gets left out!",
    "donacion-p1":    "Your help will allow environmental organizations without resources to attend the 2nd ICEO and be part of a unique space for learning, connection and collaboration.",
    "donacion-p2":    "The amount will go entirely to covering accommodation, transport and meals.",

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
    'success-title','success-p1','success-p2','success-p3','success-thanks',
    'donacion-title','donacion-p1','donacion-p2',
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