(() => {
  "use strict";

  const I18N = window.HORBI_I18N;
  const PRODUCTS = window.HORBI_PRODUCTS || [];
  const LANGS = ["en", "de", "ru", "it"];
  const $ = (id) => document.getElementById(id);

  let lang = localStorage.getItem("horbi_lang") || detectLang();
  if (!LANGS.includes(lang)) lang = "en";

  function detectLang() {
    const n = (navigator.language || "en").slice(0, 2).toLowerCase();
    return LANGS.includes(n) ? n : "en";
  }

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  }

  function productText(p) {
    return (p.i18n && (p.i18n[lang] || p.i18n.en)) || { name: p.id, short: "", description: "" };
  }

  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = `HÖRBI — ${t("hero_kicker")}`;
    const map = {
      "nav-products": "nav_products",
      "nav-about": "nav_about",
      "hero-kicker": "hero_kicker",
      "hero-title": "hero_title",
      "hero-sub": "hero_sub",
      "hero-cta": "hero_cta",
      "hero-cta2": "hero_cta2",
      "sec-live": "section_live",
      "sec-soon": "section_soon",
      "about-title": "about_title",
      "about-body": "about_body",
      "footer-text": "footer",
      "modal-close-label": "modal_close",
    };
    Object.entries(map).forEach(([id, key]) => {
      const el = $(id);
      if (!el) return;
      if (key === "hero_title") el.textContent = t(key);
      else el.textContent = t(key);
    });
    document.querySelectorAll(".lang button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  }

  function coverOf(p) {
    return (p.images && p.images[0]) || "";
  }

  function renderCards() {
    const live = PRODUCTS.filter((p) => p.status === "live");
    const soon = PRODUCTS.filter((p) => p.status === "soon");
    $("grid-live").innerHTML = live.map(cardHTML).join("");
    $("grid-soon").innerHTML = soon.map(cardHTML).join("");

    document.querySelectorAll(".card[data-id]").forEach((card) => {
      if (card.classList.contains("soon")) return;
      card.addEventListener("click", () => openProduct(card.dataset.id));
    });
  }

  function cardHTML(p) {
    const tx = productText(p);
    const cover = coverOf(p);
    const soon = p.status === "soon";
    const media = cover
      ? `<img src="${esc(cover)}" alt="" loading="lazy" onerror="this.remove();this.parentElement.querySelector('.ph').hidden=false" /><div class="ph" hidden>${esc(t("photo_soon"))}</div>`
      : `<div class="ph">${esc(t("photo_soon"))}</div>`;
    return `
      <button type="button" class="card ${soon ? "soon" : ""}" data-id="${esc(p.id)}" ${soon ? "disabled" : ""}>
        <div class="card-media">
          ${soon ? `<span class="badge">${esc(t("soon_badge"))}</span>` : ""}
          ${media}
        </div>
        <div class="card-body">
          <h3>${esc(tx.name)}</h3>
          <p>${esc(tx.short)}</p>
          ${soon ? "" : `<div class="more">${esc(t("card_open"))} →</div>`}
        </div>
      </button>`;
  }

  function openProduct(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p || p.status !== "live") return;
    const tx = productText(p);
    $("sheet-name").textContent = tx.name;
    $("sheet-desc").textContent = tx.description;
    $("sheet-sku").textContent = p.sku || "HÖRBI";
    const wb = $("sheet-wb");
    if (p.wb) {
      wb.href = p.wb;
      wb.hidden = false;
      wb.textContent = t("modal_wb");
    } else {
      wb.hidden = true;
    }

    const images = (p.images || []).filter(Boolean);
    const main = $("sheet-main");
    const thumbs = $("sheet-thumbs");
    if (!images.length) {
      main.innerHTML = `<div class="ph">${esc(t("photo_soon"))}</div>`;
      thumbs.innerHTML = "";
    } else {
      setMain(images[0]);
      thumbs.innerHTML = images
        .map(
          (src, i) =>
            `<button type="button" class="${i === 0 ? "active" : ""}" data-src="${esc(src)}"><img src="${esc(src)}" alt="" /></button>`
        )
        .join("");
      thumbs.querySelectorAll("button").forEach((b) => {
        b.addEventListener("click", () => {
          thumbs.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
          b.classList.add("active");
          setMain(b.dataset.src);
        });
      });
    }

    $("overlay").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function setMain(src) {
    $("sheet-main").innerHTML = `<img src="${esc(src)}" alt="" onerror="this.parentElement.innerHTML='<div class=ph>${esc(t("photo_soon"))}</div>'" />`;
  }

  function closeModal() {
    $("overlay").classList.remove("open");
    document.body.style.overflow = "";
  }

  function esc(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // events
  document.querySelectorAll(".lang button").forEach((b) => {
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      localStorage.setItem("horbi_lang", lang);
      applyStatic();
      renderCards();
    });
  });
  $("modal-close")?.addEventListener("click", closeModal);
  $("modal-close-2")?.addEventListener("click", closeModal);
  $("overlay")?.addEventListener("click", (e) => {
    if (e.target === $("overlay")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  applyStatic();
  renderCards();
})();
