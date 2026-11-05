import { translations } from '../i18n/translations';

type Lang = 'es' | 'en';

function getInitialLang(): Lang {
  const stored = localStorage.getItem('lang') as Lang | null;
  if (stored && (stored === 'es' || stored === 'en')) return stored;
  return 'es';
}

function applyTranslations(lang: Lang) {
  const dict = translations[lang];

  // Text content
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key && dict[key as keyof typeof dict]) {
      el.innerHTML = dict[key as keyof typeof dict];
    }
  });

  // Placeholders
  document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (key && dict[key as keyof typeof dict]) {
      el.placeholder = dict[key as keyof typeof dict];
    }
  });

  // Labels (for <label> elements)
  document.querySelectorAll<HTMLLabelElement>('[data-i18n-label]').forEach((el) => {
    const key = el.dataset.i18nLabel;
    if (key && dict[key as keyof typeof dict]) {
      el.textContent = dict[key as keyof typeof dict];
    }
  });

  // Update lang buttons
  document.querySelectorAll<HTMLElement>('.lang-btn').forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('bg-primary', isActive);
    btn.classList.toggle('text-bg-dark', isActive);
    btn.classList.toggle('text-text-secondary', !isActive);
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

function setLang(lang: Lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

export function initI18n() {
  const lang = getInitialLang();
  applyTranslations(lang);

  // Language toggle buttons
  document.querySelectorAll<HTMLElement>('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const newLang = btn.dataset.lang as Lang;
      if (newLang) setLang(newLang);
    });
  });
}
