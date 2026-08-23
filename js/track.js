/**
 * HÖRBI visit beacon → https://fbo-fbs.ru/horbi-stats/track.php
 * Lightweight: one pageview after load + leave duration.
 */
(() => {
  "use strict";
  try {
    if (location.protocol === "file:") return;

    const ENDPOINT = "https://fbo-fbs.ru/horbi-stats/track.php";
    const SID_KEY = "horbi_sid";

    const sid = (() => {
      try {
        let s = localStorage.getItem(SID_KEY);
        if (!s) {
          s = "h" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
          localStorage.setItem(SID_KEY, s);
        }
        return s;
      } catch (_) {
        return "";
      }
    })();

    const post = (obj) => {
      const body = JSON.stringify(obj);
      try {
        if (navigator.sendBeacon) {
          const blob = new Blob([body], { type: "application/json" });
          if (navigator.sendBeacon(ENDPOINT, blob)) return;
        }
      } catch (_) {}
      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
        mode: "cors",
        credentials: "omit",
      }).catch(() => {});
    };

    const page = (location.pathname || "/") + (location.search || "");
    const payload = {
      event: "pageview",
      sid,
      page,
      referrer: document.referrer || "",
      lang: (navigator.language || "").slice(0, 40),
      screen: (screen.width || 0) + "x" + (screen.height || 0),
      viewport: (window.innerWidth || 0) + "x" + (window.innerHeight || 0),
      platform: (
        (navigator.userAgentData && navigator.userAgentData.platform) ||
        navigator.platform ||
        ""
      ).slice(0, 80),
    };

    const t0 = Date.now();
    let left = false;
    const sendLeave = () => {
      if (left) return;
      left = true;
      const sec = Math.round((Date.now() - t0) / 1000);
      if (sec < 2) return;
      post({
        event: "leave",
        sid,
        page: payload.page,
        duration: Math.min(sec, 86400),
      });
    };

    const send = () => post(payload);
    if (document.readyState === "complete") {
      if (window.requestIdleCallback) window.requestIdleCallback(send, { timeout: 2500 });
      else window.setTimeout(send, 500);
    } else {
      window.addEventListener(
        "load",
        () => {
          if (window.requestIdleCallback) window.requestIdleCallback(send, { timeout: 2500 });
          else window.setTimeout(send, 500);
        },
        { once: true }
      );
    }

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") sendLeave();
    });
    window.addEventListener("pagehide", sendLeave);
  } catch (_) {}
})();
