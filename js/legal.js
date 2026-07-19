/**
 * HÖRBI legal pages — language switcher (en / ru / de / it)
 */
(() => {
  "use strict";
  const LANGS = ["en", "ru", "de", "it"];
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function detectLang() {
    try {
      const q = new URLSearchParams(location.search).get("lang");
      if (q && LANGS.includes(q.toLowerCase())) return q.toLowerCase();
    } catch (_) {}
    const stored = localStorage.getItem("horbi_lang");
    if (stored && LANGS.includes(stored)) return stored;
    const n = (navigator.language || "en").slice(0, 2).toLowerCase();
    return LANGS.includes(n) ? n : "en";
  }

  function setLang(lang) {
    if (!LANGS.includes(lang)) lang = "en";
    document.documentElement.lang = lang;
    localStorage.setItem("horbi_lang", lang);

    $$("[data-lang-block]").forEach((el) => {
      el.hidden = el.getAttribute("data-lang-block") !== lang;
    });
    $$(".legal-lang button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    const meta = window.HORBI_LEGAL_META;
    if (meta && meta[lang]) {
      document.title = meta[lang].title;
      const d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute("content", meta[lang].description);
    }

    try {
      const u = new URL(location.href);
      u.searchParams.set("lang", lang);
      history.replaceState(null, "", u.pathname + "?" + u.searchParams.toString() + u.hash);
    } catch (_) {}
  }

  document.addEventListener("DOMContentLoaded", () => {
    $$(".legal-lang button").forEach((b) => {
      b.addEventListener("click", () => setLang(b.dataset.lang));
    });
    setLang(detectLang());
  });
})();
