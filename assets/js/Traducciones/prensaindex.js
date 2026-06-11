// =============================================
//  prensaindex.js — Traducción ES / EN
// =============================================

const translations = {
  es: {
    "back-btn":    "Volver a Prensa",
    "loading-msg": "Cargando noticia...",
  },
  en: {
    "back-btn":    "Back to Press",
    "loading-msg": "Loading article...",
  }
};

let currentLang = 'es';

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  applyTranslations(currentLang);
}

function applyTranslations(lang) {
  const t = translations[lang];
  // back-btn tiene el icono como hijo, así que solo actualizamos el texto
  const backBtn = document.getElementById('back-btn');
  if (backBtn) {
    const icon = backBtn.querySelector('i');
    backBtn.innerHTML = '';
    if (icon) backBtn.appendChild(icon);
    backBtn.append(' ' + t['back-btn']);
  }
  const loading = document.getElementById('loading-msg');
  if (loading) loading.textContent = t['loading-msg'];
}