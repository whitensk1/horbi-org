(() => {
  "use strict";

  const DATA = window.HORBI_ARTICLES;
  const I18N = window.HORBI_I18N || {};
  const LANGS = ["en", "de", "ru", "it"];
  const $ = (id) => document.getElementById(id);

  if (!DATA) {
    console.error("HORBI_ARTICLES missing");
    return;
  }

  let lang = detectLang();
  if (!LANGS.includes(lang)) lang = "en";

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

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || (I18N.en && I18N.en[key]) || key;
  }

  function tx(obj) {
    if (!obj) return {};
    return obj[lang] || obj.ru || obj.en || obj.de || obj.it || {};
  }

  function setLang(next) {
    if (!LANGS.includes(next)) return;
    lang = next;
    localStorage.setItem("horbi_lang", lang);
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang button, .legal-lang button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
    try {
      const u = new URL(location.href);
      u.searchParams.set("lang", lang);
      history.replaceState(null, "", u.pathname + "?" + u.searchParams.toString() + u.hash);
    } catch (_) {}
    render();
  }

  function mediaPath(p) {
    if (!p) return "";
    // pages live at root: articles.html, article.html
    return p.startsWith("http") || p.startsWith("media/") ? p : p;
  }

  function catById(id) {
    return (DATA.categories || []).find((c) => c.id === id);
  }

  function articlesForCat(catId) {
    return (DATA.articles || []).filter((a) => a.categoryId === catId);
  }

  function articleById(id) {
    return (DATA.articles || []).find((a) => a.id === id);
  }

  /* ── Hub (articles.html) ── */
  function renderHub() {
    const root = $("journal-root");
    if (!root) return;

    document.title = `${t("nav_articles")} — HÖRBI`;
    const headTitle = $("journal-title");
    const headSub = $("journal-sub");
    if (headTitle) headTitle.textContent = t("journal_title");
    if (headSub) headSub.textContent = t("journal_sub");

    const cats = [...(DATA.categories || [])].sort((a, b) => (a.order || 0) - (b.order || 0));
    const activeCat =
      new URLSearchParams(location.search).get("cat") ||
      (cats[0] && cats[0].id) ||
      "";

    let chips = `<button type="button" class="cat-chip ${!activeCat || activeCat === "all" ? "active" : ""}" data-cat="all">${t("journal_all")}</button>`;
    chips += cats
      .map((c) => {
        const ctx = tx(c.i18n);
        return `<button type="button" class="cat-chip ${activeCat === c.id ? "active" : ""}" data-cat="${c.id}">${esc(ctx.name || c.id)}</button>`;
      })
      .join("");

    const showCats = !activeCat || activeCat === "all";
    let body = "";

    if (showCats) {
      body += `<div class="cat-grid">`;
      body += cats
        .map((c) => {
          const ctx = tx(c.i18n);
          const n = articlesForCat(c.id).length;
          return `
          <button type="button" class="cat-card" data-open-cat="${esc(c.id)}">
            <div class="cat-card-media">
              <img src="${esc(mediaPath(c.cover))}" alt="" loading="lazy" width="640" height="400" />
            </div>
            <div class="cat-card-body">
              <div class="cat-card-meta">${n} ${esc(t("journal_articles_count"))}</div>
              <h2>${esc(ctx.name || c.id)}</h2>
              <p>${esc(ctx.blurb || "")}</p>
            </div>
          </button>`;
        })
        .join("");
      body += `</div>`;
    }

    const list = showCats
      ? DATA.articles || []
      : articlesForCat(activeCat);

    body += `<h2 class="journal-section-label" style="margin:8px 0 16px;font-size:1.1rem;font-weight:800;letter-spacing:-0.02em">${esc(
      showCats ? t("journal_latest") : tx(catById(activeCat)?.i18n).name || ""
    )}</h2>`;

    if (!list.length) {
      body += `<div class="journal-empty">${esc(t("journal_empty"))}</div>`;
    } else {
      body += `<div class="article-grid">`;
      body += list
        .map((a) => {
          const atx = tx(a.i18n);
          const cat = catById(a.categoryId);
          const cname = tx(cat?.i18n).name || a.categoryId;
          return `
          <a class="article-card" href="article.html?id=${encodeURIComponent(a.id)}&lang=${lang}">
            <div class="article-card-media">
              <img src="${esc(mediaPath(a.cover))}" alt="" loading="lazy" width="640" height="400" />
            </div>
            <div class="article-card-body">
              <div class="meta">${esc(cname)} · ${esc(atx.readMin || "")}</div>
              <h3>${esc(atx.title || a.id)}</h3>
              <p>${esc(atx.lead || "").slice(0, 140)}${(atx.lead || "").length > 140 ? "…" : ""}</p>
            </div>
          </a>`;
        })
        .join("");
      body += `</div>`;
    }

    root.innerHTML = `
      <div class="cat-row" id="cat-row">${chips}</div>
      ${body}`;

    root.querySelectorAll(".cat-chip").forEach((b) => {
      b.addEventListener("click", () => {
        const cat = b.dataset.cat;
        const u = new URL(location.href);
        if (!cat || cat === "all") u.searchParams.delete("cat");
        else u.searchParams.set("cat", cat);
        u.searchParams.set("lang", lang);
        history.replaceState(null, "", u.pathname + "?" + u.searchParams.toString());
        renderHub();
      });
    });
    root.querySelectorAll("[data-open-cat]").forEach((b) => {
      b.addEventListener("click", () => {
        const u = new URL(location.href);
        u.searchParams.set("cat", b.dataset.openCat);
        u.searchParams.set("lang", lang);
        history.replaceState(null, "", u.pathname + "?" + u.searchParams.toString());
        renderHub();
      });
    });
  }

  /* ── Article page ── */
  function renderArticle() {
    const root = $("article-root");
    if (!root) return;

    const id = new URLSearchParams(location.search).get("id") || "chlorophyll-guide";
    const a = articleById(id);
    if (!a) {
      root.innerHTML = `<p class="journal-empty">${esc(t("journal_empty"))}</p>`;
      return;
    }

    const atx = tx(a.i18n);
    const cat = catById(a.categoryId);
    const cname = tx(cat?.i18n).name || "";
    document.title = `${atx.title || a.id} — HÖRBI`;

    const desc = document.querySelector('meta[name="description"]');
    if (desc && atx.lead) desc.setAttribute("content", atx.lead.slice(0, 160));

    const callouts = (atx.callouts || [])
      .map(
        (c, i) => `
      <div class="callout">
        <div class="n">0${i + 1}</div>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.text)}</p>
      </div>`
      )
      .join("");

    const sections = (atx.sections || [])
      .map((s, idx) => {
        let extra = "";
        if (idx === 0 && a.images?.leaves) {
          extra = `
          <figure class="article-figure">
            <img src="${esc(mediaPath(a.images.leaves))}" alt="" loading="lazy" width="900" height="600" />
            <figcaption>${esc(t("journal_fig_leaves"))}</figcaption>
          </figure>`;
        }
        if (idx === 1 && a.images?.glass) {
          extra = `
          <figure class="article-figure">
            <img src="${esc(mediaPath(a.images.glass))}" alt="" loading="lazy" width="900" height="500" />
            <figcaption>${esc(t("journal_fig_glass"))}</figcaption>
          </figure>`;
        }
        if (idx === 1 && callouts) {
          extra += `<div class="callout-grid">${callouts}</div>`;
        }
        return `<section><h2>${esc(s.h)}</h2>${s.html || ""}${extra}</section>`;
      })
      .join("");

    const sources = (a.sources || [])
      .map((s) => {
        const note = (s.note && (s.note[lang] || s.note.en)) || "";
        return `
        <div class="source-item">
          <div class="label">${esc(s.label || "")}</div>
          <a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title || s.url)}</a>
          <p>${esc(note)}</p>
        </div>`;
      })
      .join("");

    root.innerHTML = `
      <a class="article-back" href="articles.html?lang=${lang}">← ${esc(t("journal_back"))}</a>
      <div class="article-hero-img">
        <img src="${esc(mediaPath(a.images?.hero || a.cover))}" alt="" width="1200" height="675" />
      </div>
      <div class="article-shell">
        <p class="kicker">${esc(atx.kicker || cname)}</p>
        <h1>${esc(atx.title || a.id)}</h1>
        <p class="article-lead">${esc(atx.lead || "")}</p>
        <p class="article-meta-line">${esc(atx.readMin || "")}${a.published ? " · " + a.published : ""}</p>
        <div class="article-body">${sections}</div>
        <div class="sources">
          <h2>${esc(t("journal_sources"))}</h2>
          ${sources}
          <p class="article-note" style="margin-top:18px">${esc(t("footer_disclaimer"))}</p>
        </div>
      </div>`;
  }

  function esc(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function render() {
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang button, .legal-lang button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
    // nav labels if present
    const map = {
      "nav-products": "nav_products",
      "nav-about": "nav_about",
      "nav-contact": "nav_contact",
      "nav-articles": "nav_articles",
      "nav-shop": "nav_shop",
    };
    Object.entries(map).forEach(([id, key]) => {
      const el = $(id);
      if (el) el.textContent = t(key);
    });
    const shop = $("nav-shop");
    if (shop) shop.href = "https://www.wildberries.ru/brands/312311510-horbi";

    if ($("journal-root")) renderHub();
    if ($("article-root")) renderArticle();
  }

  document.querySelectorAll(".lang button, .legal-lang button").forEach((b) => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });

  // mobile nav if present
  const toggle = $("nav-toggle");
  const nav = $("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  render();
})();
