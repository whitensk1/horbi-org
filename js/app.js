(() => {
  "use strict";

  const I18N = window.HORBI_I18N;
  const PRODUCTS = window.HORBI_PRODUCTS || [];
  const LANGS = ["en", "de", "ru", "it"];
  const WB_BRAND = "https://www.wildberries.ru/brands/312311510-horbi";
  const CONTACT = "https://dluck.ru/#kontact";
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
    return (p.i18n && (p.i18n[lang] || p.i18n.ru || p.i18n.en)) || {
      name: p.id,
      short: "",
      descriptionHtml: "",
    };
  }

  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = "HÖRBI";
    const map = {
      "nav-products": "nav_products",
      "nav-about": "nav_about",
      "nav-contact": "nav_contact",
      "hero-title": "hero_title",
      "hero-sub": "hero_sub",
      "hero-cta": "hero_cta",
      "hero-cta2": "hero_cta2",
      "sec-live": "section_live",
      "sec-soon": "section_soon",
      "about-title": "about_title",
      "about-body": "about_body",
      "about-body-2": "about_body_2",
      "contact-title": "contact_title",
      "contact-body": "contact_body",
      "footer-text": "footer",
    };
    Object.entries(map).forEach(([id, key]) => {
      const el = $(id);
      if (el) el.textContent = t(key);
    });
    const contactLink = $("contact-link");
    if (contactLink) {
      contactLink.href = CONTACT;
      contactLink.textContent = t("contact_cta");
    }
    const wbHero = $("hero-cta2");
    if (wbHero) wbHero.href = WB_BRAND;
    const shop = $("nav-shop");
    if (shop) {
      shop.href = WB_BRAND;
      shop.textContent = t("nav_shop");
    }
    document.querySelectorAll(".lang button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  }

  function setNavOpen(open) {
    const nav = $("site-nav");
    const toggle = $("nav-toggle");
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function closeNav() {
    setNavOpen(false);
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
      card.addEventListener("click", () => openProduct(card.dataset.id));
    });
  }

  function cardHTML(p) {
    const tx = productText(p);
    const cover = coverOf(p);
    const soon = p.status === "soon";
    // Live products with photos: only <img>. Never render «фото скоро» over real images.
    // Soon products without photos: placeholder badge only.
    let media;
    if (cover) {
      media = `<img class="card-img" src="${esc(cover)}" alt="${esc(tx.name)}" loading="lazy" decoding="async" width="600" height="750" />`;
    } else if (soon) {
      media = `<div class="ph"><span class="soon-big">${esc(t("soon_badge"))}</span><span>${esc(tx.name)}</span></div>`;
    } else {
      media = `<div class="ph"><span class="soon-big">${esc(t("soon_badge"))}</span></div>`;
    }
    return `
      <button type="button" class="card ${soon ? "soon" : ""}" data-id="${esc(p.id)}">
        <div class="card-media">
          ${soon ? `<span class="badge">${esc(t("soon_badge"))}</span>` : ""}
          ${media}
        </div>
        <div class="card-body">
          <h3>${esc(tx.name)}</h3>
          <p>${esc(tx.short)}</p>
          <div class="more">${esc(soon ? t("soon_badge") : t("card_open"))} →</div>
        </div>
      </button>`;
  }

  function openProduct(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    const tx = productText(p);
    $("sheet-name").textContent = tx.name;
    $("sheet-desc").innerHTML =
      tx.descriptionHtml || `<p class="lead">${esc(tx.short || "")}</p>`;
    $("sheet-sku").textContent = p.sku || "HÖRBI";

    const wb = $("sheet-wb");
    if (p.status === "live") {
      wb.href = p.wb || WB_BRAND;
      wb.hidden = false;
      wb.textContent = t("modal_wb");
    } else {
      wb.hidden = true;
    }

    const images = (p.images || []).filter(Boolean);
    const main = $("sheet-main");
    const thumbs = $("sheet-thumbs");
    if (!images.length) {
      main.innerHTML = `<div class="ph"><span class="soon-big">${esc(t("soon_badge"))}</span></div>`;
      thumbs.innerHTML = "";
      thumbs.hidden = true;
    } else {
      thumbs.hidden = images.length < 2;
      setMain(images[0]);
      thumbs.innerHTML = images
        .map(
          (src, i) =>
            `<button type="button" class="${i === 0 ? "active" : ""}" data-src="${esc(src)}"><img src="${esc(src)}" alt="" loading="lazy" decoding="async" width="112" height="112" /></button>`
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
    document.documentElement.style.overflowX = "hidden";
  }

  function setMain(src) {
    $("sheet-main").innerHTML = `<img src="${esc(src)}" alt="" decoding="async" />`;
  }

  function closeModal() {
    $("overlay").classList.remove("open");
    document.body.style.overflow = "";
    document.documentElement.style.overflowX = "";
  }

  function esc(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  document.querySelectorAll(".lang button").forEach((b) => {
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      localStorage.setItem("horbi_lang", lang);
      applyStatic();
      renderCards();
    });
  });

  // mobile hamburger menu
  $("nav-toggle")?.addEventListener("click", () => {
    const nav = $("site-nav");
    setNavOpen(!nav?.classList.contains("is-open"));
  });
  document.querySelectorAll("#nav-panel a").forEach((a) => {
    a.addEventListener("click", () => closeNav());
  });
  document.addEventListener("click", (e) => {
    const nav = $("site-nav");
    if (!nav?.classList.contains("is-open")) return;
    if (!nav.contains(e.target)) closeNav();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) closeNav();
  });

  $("modal-close")?.addEventListener("click", closeModal);
  $("modal-close-2")?.addEventListener("click", closeModal);
  $("overlay")?.addEventListener("click", (e) => {
    if (e.target === $("overlay")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeNav();
    }
  });

  // hero + catalog background videos
  ["hero-video", "catalog-video"].forEach((id) => {
    const v = $(id);
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("muted", "");
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) tryPlay();
    });
  });

  applyStatic();
  renderCards();
})();
