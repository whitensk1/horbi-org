(() => {
  "use strict";

  const I18N = window.HORBI_I18N;
  const PRODUCTS = window.HORBI_PRODUCTS || [];
  const LANGS = ["en", "de", "ru", "it"];
  const WB_BRAND = "https://www.wildberries.ru/brands/312311510-horbi";
  const CONTACT = "https://dluck.ru/#kontact";
  const SITE = "https://horbi.org/";
  const $ = (id) => document.getElementById(id);

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
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  }

  function setMeta(nameOrProp, content, attr) {
    if (!content) return;
    const a = attr || (nameOrProp.startsWith("og:") ? "property" : "name");
    let el = document.head.querySelector(`meta[${a}="${nameOrProp}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(a, nameOrProp);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function applySeo() {
    const title = t("seo_title");
    const desc = t("seo_description");
    const keys = t("seo_keywords");
    const locale = t("seo_og_locale") || "en_US";
    document.title = title;
    document.documentElement.lang = lang;
    setMeta("description", desc);
    setMeta("keywords", keys);
    setMeta("og:title", title, "property");
    setMeta("og:description", desc, "property");
    setMeta("og:locale", locale, "property");
    setMeta("og:url", `${SITE}?lang=${lang}`, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", desc);
    const md = $("meta-description");
    if (md) md.setAttribute("content", desc);
    const mk = $("meta-keywords");
    if (mk) mk.setAttribute("content", keys);
    const ogt = $("og-title");
    if (ogt) ogt.setAttribute("content", title);
    const ogd = $("og-description");
    if (ogd) ogd.setAttribute("content", desc);
    const ogl = $("og-locale");
    if (ogl) ogl.setAttribute("content", locale);
    const twt = $("tw-title");
    if (twt) twt.setAttribute("content", title);
    const twd = $("tw-description");
    if (twd) twd.setAttribute("content", desc);
    // keep URL shareable with ?lang=
    try {
      const u = new URL(location.href);
      if (u.searchParams.get("lang") !== lang) {
        u.searchParams.set("lang", lang);
        history.replaceState(null, "", u.pathname + "?" + u.searchParams.toString() + u.hash);
      }
    } catch (_) {}
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
    applySeo();
    const map = {
      "nav-products": "nav_products",
      "nav-about": "nav_about",
      "nav-contact": "nav_contact",
      "nav-articles": "nav_articles",
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
      "footer-privacy": "footer_privacy",
      "footer-cookies": "footer_cookies",
      "footer-disclaimer": "footer_disclaimer",
    };
    Object.entries(map).forEach(([id, key]) => {
      const el = $(id);
      if (el) el.textContent = t(key);
    });
    const fp = $("footer-privacy");
    if (fp) fp.href = `privacy.html?lang=${lang}`;
    const fc = $("footer-cookies");
    if (fc) fc.href = `cookies.html?lang=${lang}`;
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

  let galleryImages = [];
  let galleryIndex = 0;
  const swipeBoundEls = new WeakSet();
  let lightboxOpen = false;

  function isLightboxOpen() {
    return lightboxOpen && $("lightbox")?.classList.contains("open");
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

    galleryImages = (p.images || []).filter(Boolean);
    galleryIndex = 0;
    const main = $("sheet-main");
    const thumbs = $("sheet-thumbs");
    if (!galleryImages.length) {
      main.innerHTML = `<div class="ph"><span class="soon-big">${esc(t("soon_badge"))}</span></div>`;
      thumbs.innerHTML = "";
      thumbs.hidden = true;
      updateGalleryChrome();
    } else {
      thumbs.hidden = galleryImages.length < 2;
      renderThumbs();
      showGalleryAt(0, false);
      bindSwipeSurface(main, {
        getImg: () => main.querySelector("img.sheet-photo"),
        onTap: () => openLightbox(),
      });
    }

    $("overlay").classList.add("open");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflowX = "hidden";
  }

  function renderThumbs() {
    const thumbs = $("sheet-thumbs");
    if (!thumbs) return;
    thumbs.innerHTML = galleryImages
      .map(
        (src, i) =>
          `<button type="button" class="${i === galleryIndex ? "active" : ""}" data-index="${i}" data-src="${esc(src)}"><img src="${esc(src)}" alt="" loading="lazy" decoding="async" width="112" height="112" /></button>`
      )
      .join("");
    thumbs.querySelectorAll("button").forEach((b) => {
      b.addEventListener("click", () => {
        showGalleryAt(Number(b.dataset.index), true);
      });
    });
  }

  function updateGalleryChrome() {
    const main = $("sheet-main");
    if (!main) return;
    let prev = main.querySelector(".sheet-nav.prev");
    let next = main.querySelector(".sheet-nav.next");
    let counter = main.querySelector(".sheet-counter");
    const multi = galleryImages.length > 1;

    if (multi) {
      if (!prev) {
        prev = document.createElement("button");
        prev.type = "button";
        prev.className = "sheet-nav prev";
        prev.setAttribute("aria-label", "Previous photo");
        prev.textContent = "‹";
        prev.addEventListener("click", (e) => {
          e.stopPropagation();
          showGalleryAt(galleryIndex - 1, true);
        });
        main.appendChild(prev);
      }
      if (!next) {
        next = document.createElement("button");
        next.type = "button";
        next.className = "sheet-nav next";
        next.setAttribute("aria-label", "Next photo");
        next.textContent = "›";
        next.addEventListener("click", (e) => {
          e.stopPropagation();
          showGalleryAt(galleryIndex + 1, true);
        });
        main.appendChild(next);
      }
      if (!counter) {
        counter = document.createElement("div");
        counter.className = "sheet-counter";
        main.appendChild(counter);
      }
      prev.hidden = false;
      next.hidden = false;
      counter.hidden = false;
      counter.textContent = `${galleryIndex + 1} / ${galleryImages.length}`;
    } else {
      if (prev) prev.hidden = true;
      if (next) next.hidden = true;
      if (counter) counter.hidden = true;
    }

    // lightbox chrome
    const lbPrev = $("lightbox-prev");
    const lbNext = $("lightbox-next");
    const lbCount = $("lightbox-counter");
    if (lbPrev) lbPrev.hidden = !multi;
    if (lbNext) lbNext.hidden = !multi;
    if (lbCount) {
      lbCount.hidden = !multi;
      if (multi) lbCount.textContent = `${galleryIndex + 1} / ${galleryImages.length}`;
    }
  }

  function setImgSrc(img, src, animate) {
    if (!img) return;
    if (animate) {
      img.style.opacity = "0.35";
      img.style.transform = "scale(0.985)";
      requestAnimationFrame(() => {
        img.src = src;
        const done = () => {
          img.style.opacity = "1";
          img.style.transform = "scale(1)";
        };
        img.onload = done;
        if (img.complete) done();
      });
    } else {
      img.src = src;
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
    }
  }

  function showGalleryAt(index, animate) {
    if (!galleryImages.length) return;
    const n = galleryImages.length;
    galleryIndex = ((index % n) + n) % n;
    const src = galleryImages[galleryIndex];
    const main = $("sheet-main");
    if (main) {
      let img = main.querySelector("img.sheet-photo");
      if (!img) {
        main.querySelectorAll(".ph, img.sheet-photo").forEach((el) => el.remove());
        img = document.createElement("img");
        img.className = "sheet-photo";
        img.alt = "";
        img.decoding = "async";
        img.title = "Click to enlarge";
        main.insertBefore(img, main.firstChild);
      }
      setImgSrc(img, src, animate);
    }

    const lbImg = $("lightbox-img");
    if (lbImg && isLightboxOpen()) {
      setImgSrc(lbImg, src, animate);
    }

    const thumbs = $("sheet-thumbs");
    if (thumbs) {
      thumbs.querySelectorAll("button").forEach((b, i) => {
        b.classList.toggle("active", i === galleryIndex);
      });
      const active = thumbs.querySelector("button.active");
      if (active && active.scrollIntoView) {
        active.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
    updateGalleryChrome();
  }

  /**
   * Swipe left/right + tap (no drag) on a surface.
   * opts.getImg() — image to translate during drag
   * opts.onTap() — short click without swipe
   */
  function bindSwipeSurface(el, opts) {
    if (!el || swipeBoundEls.has(el)) return;
    swipeBoundEls.add(el);

    let startX = 0;
    let startY = 0;
    let dx = 0;
    let dy = 0;
    let tracking = false;
    let locked = null; // "h" | "v"
    let moved = false;

    const point = (e) => {
      if (e.touches && e.touches[0]) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      return { x: e.clientX, y: e.clientY };
    };

    const onStart = (e) => {
      if (e.target.closest && e.target.closest(".sheet-nav, .lightbox-nav, .lightbox-close, .x")) return;
      const p = point(e);
      startX = p.x;
      startY = p.y;
      dx = 0;
      dy = 0;
      tracking = true;
      locked = null;
      moved = false;
      el.classList.add("is-swiping");
    };

    const onMove = (e) => {
      if (!tracking) return;
      const p = point(e);
      dx = p.x - startX;
      dy = p.y - startY;
      if (Math.abs(dx) > 6 || Math.abs(dy) > 6) moved = true;
      if (!locked) {
        if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
          locked = Math.abs(dx) > Math.abs(dy) ? "h" : "v";
        }
      }
      if (locked === "h" && galleryImages.length > 1) {
        if (e.cancelable) e.preventDefault();
        const img = opts.getImg && opts.getImg();
        if (img) {
          img.style.transform = `translateX(${dx * 0.35}px)`;
          img.style.opacity = String(Math.max(0.45, 1 - Math.abs(dx) / 420));
        }
      }
    };

    const onEnd = () => {
      if (!tracking) return;
      tracking = false;
      el.classList.remove("is-swiping");
      const img = opts.getImg && opts.getImg();
      if (img) {
        img.style.transform = "";
        img.style.opacity = "1";
      }
      if (locked === "h" && galleryImages.length > 1 && Math.abs(dx) > 48) {
        if (dx < 0) showGalleryAt(galleryIndex + 1, true);
        else showGalleryAt(galleryIndex - 1, true);
      } else if (!moved && opts.onTap) {
        opts.onTap();
      }
      locked = null;
      dx = 0;
      dy = 0;
      moved = false;
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: false });
    el.addEventListener("touchend", onEnd);
    el.addEventListener("touchcancel", onEnd);
    el.addEventListener("mousedown", onStart);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);
  }

  function openLightbox() {
    if (!galleryImages.length) return;
    const lb = $("lightbox");
    const lbImg = $("lightbox-img");
    const stage = $("lightbox-stage");
    if (!lb || !lbImg) return;
    lightboxOpen = true;
    lb.hidden = false;
    // force reflow then open for fade
    void lb.offsetWidth;
    lb.classList.add("open");
    lbImg.src = galleryImages[galleryIndex];
    lbImg.style.opacity = "1";
    lbImg.style.transform = "scale(1)";
    updateGalleryChrome();
    if (stage) {
      bindSwipeSurface(stage, {
        getImg: () => $("lightbox-img"),
        onTap: () => {}, // tap on dim area handled separately; image tap does nothing
      });
    }
  }

  function closeLightbox() {
    const lb = $("lightbox");
    if (!lb) return;
    lightboxOpen = false;
    lb.classList.remove("open");
    setTimeout(() => {
      if (!lightboxOpen) lb.hidden = true;
    }, 220);
  }

  function closeModal() {
    closeLightbox();
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

  $("lightbox-close")?.addEventListener("click", (e) => {
    e.stopPropagation();
    closeLightbox();
  });
  $("lightbox-prev")?.addEventListener("click", (e) => {
    e.stopPropagation();
    showGalleryAt(galleryIndex - 1, true);
  });
  $("lightbox-next")?.addEventListener("click", (e) => {
    e.stopPropagation();
    showGalleryAt(galleryIndex + 1, true);
  });
  $("lightbox")?.addEventListener("click", (e) => {
    // click dark background (not stage/nav) closes lightbox
    if (e.target === $("lightbox")) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (isLightboxOpen()) {
        closeLightbox();
        return;
      }
      closeModal();
      closeNav();
      return;
    }
    if (!$("overlay")?.classList.contains("open") && !isLightboxOpen()) return;
    if (galleryImages.length < 2) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      showGalleryAt(galleryIndex - 1, true);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      showGalleryAt(galleryIndex + 1, true);
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
