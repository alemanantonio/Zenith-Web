import { translations, type Lang } from '../data/i18n';

const STORAGE_KEY = 'zenith_lang';

export function detectUserLanguage(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (saved && (saved === 'es' || saved === 'en')) {
    return saved;
  }

  const initialLang = document.documentElement.getAttribute('data-initial-lang') as Lang | null;
  if (initialLang === 'es' || initialLang === 'en') {
    return initialLang;
  }

  const browserLang = (navigator.language || (navigator as any).userLanguage || 'es').toLowerCase();
  if (browserLang.startsWith('en')) {
    return 'en';
  }
  return 'es';
}

export function setLanguage(lang: Lang, withAnimation = true) {
  const current = (document.documentElement.getAttribute('data-lang') as Lang) || 'es';
  if (current === lang && document.documentElement.hasAttribute('data-lang')) return;

  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;

  if (withAnimation) {
    triggerLanguageTransition(() => {
      applyTranslations(lang);
    });
  } else {
    applyTranslations(lang);
  }
}

function triggerLanguageTransition(updateFn: () => void) {
  let overlay = document.getElementById('lang-shimmer');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'lang-shimmer';
    overlay.className = 'lang-shimmer-fx';
    document.body.appendChild(overlay);
  }

  overlay.classList.remove('active');
  void overlay.offsetWidth; // force reflow
  overlay.classList.add('active');

  setTimeout(() => {
    updateFn();
  }, 220);

  setTimeout(() => {
    overlay?.classList.remove('active');
  }, 750);
}

function applyTranslations(lang: Lang) {
  const t = translations[lang];

  // Update elements with data-i18n
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;

    const value = getNestedValue(t, key);
    if (typeof value === 'string') {
      el.textContent = value;
    }
  });

  // Update illuminated statement if present
  const st = document.getElementById('statement');
  if (st) {
    const statementText = t.site.statement;
    st.innerHTML = statementText.trim().split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(' ');
  }

  // Update elements with data-i18n-attr="attrName:key"
  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
    const attrRule = el.getAttribute('data-i18n-attr');
    if (!attrRule) return;
    const parts = attrRule.split(':');
    if (parts.length === 2) {
      const [attrName, key] = parts;
      const value = getNestedValue(t, key);
      if (typeof value === 'string') {
        el.setAttribute(attrName, value);
      }
    }
  });

  // Update language toggle buttons UI state
  document.querySelectorAll<HTMLElement>('.lang-btn').forEach((btn) => {
    const targetLang = btn.getAttribute('data-target-lang');
    if (targetLang === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });
}

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
}

export function initLanguage() {
  const initial = detectUserLanguage();
  setLanguage(initial, false);

  document.querySelectorAll<HTMLElement>('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-target-lang') as Lang;
      if (targetLang) {
        setLanguage(targetLang, true);
      }
    });
  });
}
