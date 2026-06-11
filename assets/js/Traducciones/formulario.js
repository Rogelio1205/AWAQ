// =============================================
//  formulario.js — Sistema de traducción ES / EN
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

    // Form header
    "form-title":      "Solicitud de asistencia al Congreso",
    "form-subtitle":   "Rellena los siguientes datos para solicitar tu plaza en el congreso.",
    "form-disclaimer": "* El aforo a este congreso es limitado, la solicitud de asistencia no garantiza la plaza. Recibirás confirmación en un plazo de 24h vía e-mail.",

    // Step 1
    "step1-title":       "¿Qué necesitas?",
    "step1-label":       "Selecciona una de estas opciones *",
    "op1-label":         "Quiero solicitar mi asistencia al congreso",
    "op2-label":         "Quiero inscribirme como ponente",
    "op3-label":         "Quiero proponer una colaboración | ser aliado",
    "step1-req":         "Requerido",
    "btn-continuar-text":"Continuar",

    // Step 2
    "step2-title":     "Déjanos tus datos para ponernos en contacto contigo",
    "email-label":     "E-mail *",
    "email-req":       "Requerido",
    "firstname-label":      "Nombre *",
    "lastname-label":       "Apellidos *",
    "firstname-placeholder": "Nombre",
    "lastname-placeholder":  "Apellidos",
    "name-req":        "Requerido",
    "orgtype-label":   "Tipo de organización *",
    "t1-label":        "Universidad",
    "t2-label":        "Empresa privada",
    "t3-label":        "Administración pública",
    "t4-label":        "Persona independiente",
    "t5-label":        "Asociación / ONG",
    "t6-label":        "Otra organización",
    "orgtype-req":     "Requerido",
    "orgname-label":   "Nombre de tu organización *",
    "orgname-req":     "Requerido",
    "job-label":       "Tu puesto dentro de la organización *",
    "job-req":         "Requerido",
    "phone-label":     "Nº Teléfono *",
    "phone-req":       "Requerido",
    "phone-loading":   "Cargando países...",
    "location-label":  "Ubicación",
    "country-label":   "Selecciona un país",
    "country-loading": "Cargando...",
    "state-label":     "Selecciona region/estado",
    "state-loading":   "Cargando...",
    "city-label":      "Selecciona localidad",
    "city-loading":    "Cargando...",
    "location-req":    "Requerido",
    "msg-label":       "Mensaje",
    "msg-optional":    "Opcional",
    "terms-label":     "<span class=\"text-cyan-800 font-medium\">*</span> He leído y acepto las políticas de privacidad. <span class=\"text-cyan-700\">Requerido.</span>",
    "newsletter-label":"Acepto recibir comunicaciones por correo electrónico de Awaq ONGD.",
    "btn-enviar-text": "Enviar",
    "validation-msg":  "Completa todos los campos para habilitar el envío",

    // Modal
    "modal-title": "¡Solicitud recibida!",
    "modal-desc":  "Hemos registrado tus datos correctamente. En breve nos pondremos en contacto contigo.",
    "modal-btn":   "Cerrar",

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
    "email-placeholder":   "ejemplo@correo.com",
    "name-placeholder":    "Nombre completo",
    "orgname-placeholder": "Nombre de la institución",
    "job-placeholder":     "Cargo o rol",
    "msg-placeholder":     "Escribe tu mensaje...",
    "footer-email-placeholder": "correo@electrónico.com",
    "footer-msg-placeholder":   "Click para empezar a escribir",
    "country-search-placeholder": "Buscar país...",
    "state-search-placeholder":   "Buscar región...",
    "city-search-placeholder":    "Buscar ciudad...",
    "phone-search-placeholder":   "Buscar país...",
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

    // Form header
    "form-title":      "Congress Attendance Request",
    "form-subtitle":   "Fill in the following details to request your spot at the congress.",
    "form-disclaimer": "* Congress capacity is limited, submitting a request does not guarantee your spot. You will receive confirmation within 24h by e-mail.",

    // Step 1
    "step1-title":        "What do you need?",
    "step1-label":        "Select one of these options *",
    "op1-label":          "I want to request attendance at the congress",
    "op2-label":          "I want to register as a speaker",
    "op3-label":          "I want to propose a collaboration | be an ally",
    "step1-req":          "Required",
    "btn-continuar-text": "Continue",

    // Step 2
    "step2-title":     "Leave us your details so we can get in touch",
    "email-label":     "E-mail *",
    "email-req":       "Required",
    "name-label":      "Full name *",
    "name-req":        "Required",
    "orgtype-label":   "Type of organization *",
    "t1-label":        "University",
    "t2-label":        "Private company",
    "t3-label":        "Public administration",
    "t4-label":        "Independent person",
    "t5-label":        "Association / NGO",
    "t6-label":        "Other organization",
    "orgtype-req":     "Required",
    "orgname-label":   "Your organization name *",
    "orgname-req":     "Required",
    "job-label":       "Your role within the organization *",
    "job-req":         "Required",
    "phone-label":     "Phone number *",
    "phone-req":       "Required",
    "phone-loading":   "Loading countries...",
    "location-label":  "Location",
    "country-label":   "Select a country",
    "country-loading": "Loading...",
    "state-label":     "Select region/state",
    "state-loading":   "Loading...",
    "city-label":      "Select city",
    "city-loading":    "Loading...",
    "location-req":    "Required",
    "msg-label":       "Message",
    "msg-optional":    "Optional",
    "terms-label":     "<span class=\"text-cyan-800 font-medium\">*</span> I have read and accept the privacy policy. <span class=\"text-cyan-700\">Required.</span>",
    "newsletter-label":"I agree to receive email communications from Awaq ONGD.",
    "btn-enviar-text": "Submit",
    "validation-msg":  "Complete all fields to enable submission",

    // Modal
    "modal-title": "Request received!",
    "modal-desc":  "We have successfully registered your details. We will be in touch shortly.",
    "modal-btn":   "Close",

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
    "email-placeholder":   "example@email.com",
    "name-placeholder":    "Full name",
    "orgname-placeholder": "Institution name",
    "job-placeholder":     "Role or position",
    "msg-placeholder":     "Write your message...",
    "footer-email-placeholder": "email@example.com",
    "footer-msg-placeholder":   "Click to start writing",
    "country-search-placeholder": "Search country...",
    "state-search-placeholder":   "Search region...",
    "city-search-placeholder":    "Search city...",
    "phone-search-placeholder":   "Search country...",

    "firstname-label":      "First name *",
    "lastname-label":       "Last name(s) *",
    "firstname-placeholder": "First name",
    "lastname-placeholder":  "Last name(s)",
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
    'form-title','form-subtitle','form-disclaimer',
    'step1-title','step1-label','op1-label','op2-label','op3-label','step1-req','btn-continuar-text',
    'step2-title',
    'email-label','email-req','name-label','name-req',
    'orgtype-label','t1-label','t2-label','t3-label','t4-label','t5-label','t6-label','orgtype-req',
    'orgname-label','orgname-req','job-label','job-req',
    'phone-label','phone-req','phone-loading',
    'location-label','country-label','country-loading',
    'state-label','state-loading','city-label','city-loading','location-req',
    'msg-label','msg-optional','terms-label','newsletter-label',
    'btn-enviar-text','validation-msg',
    'modal-title','modal-desc','modal-btn',
    'footer-escribenos','footer-escribenos-desc','footer-email-label','footer-requerido1',
    'footer-msg-label','footer-requerido2','footer-send',
    'footer-contact','footer-streaming',
    'footer-privacy','footer-cookies','footer-legal','footer-convivencia', 'firstname-label', 'lastname-label', 'firstname-placeholder', 'lastname-placeholder'
  ];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id] !== undefined) el.innerHTML = t[id];
  });

  // Placeholders de inputs (atributo)
  const placeholders = [
    'email-placeholder','name-placeholder','orgname-placeholder',
    'job-placeholder','msg-placeholder',
    'footer-email-placeholder','footer-msg-placeholder',
  ];
  placeholders.forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id] !== undefined) el.setAttribute('placeholder', t[id]);
  });

  // Placeholders de búsqueda en dropdowns
  const searches = [
    ['country-search', 'country-search-placeholder'],
    ['state-search',   'state-search-placeholder'],
    ['city-search',    'city-search-placeholder'],
    ['phone-search',   'phone-search-placeholder'],
  ];
  searches.forEach(([elId, key]) => {
    const el = document.getElementById(elId);
    if (el && t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });
}