import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TAWK_SCRIPT_ID = "tawkto-embed";
const TAWK_STYLE_ID = "tawkto-custom-style";
const TAWK_SRC = "https://embed.tawk.to/698712e028f11d1c39cbc621/1jgrq3ftj";

function ensureTawkLoaded() {
  if (typeof window === "undefined") return;

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  if (document.getElementById(TAWK_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = TAWK_SCRIPT_ID;
  script.async = true;
  script.src = TAWK_SRC;
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");

  const firstScript = document.getElementsByTagName("script")[0];
  if (firstScript?.parentNode) firstScript.parentNode.insertBefore(script, firstScript);
  else document.head.appendChild(script);
}

function ensureTawkStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(TAWK_STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = TAWK_STYLE_ID;
  style.type = "text/css";

  // Push the Tawk bubble up so it doesn't cover the mobile bottom bar.
  // Values are intentionally conservative and responsive.
  style.textContent = `
:root {
  /* Mobile bottom nav is ~64px tall; add extra clearance for the bubble */
  --tawk-offset-bottom: calc(112px + env(safe-area-inset-bottom, 0px));
  --tawk-offset-right: 16px;
  --tawk-scale: 0.92;
}

@media (max-width: 380px) {
  :root {
    --tawk-offset-bottom: calc(128px + env(safe-area-inset-bottom, 0px));
  }
}

@media (min-width: 768px) {
  :root {
    --tawk-offset-bottom: 24px;
    --tawk-offset-right: 24px;
    --tawk-scale: 1;
  }
}

/* Common Tawk containers across themes */
#tawkchat-container,
.tawk-min-container,
.tawk-widget-container,
.tawk-button-container,
iframe[title*="tawk" i],
iframe[src*="tawk.to" i] {
  bottom: var(--tawk-offset-bottom) !important;
  right: var(--tawk-offset-right) !important;
  transform: scale(var(--tawk-scale)) !important;
  transform-origin: bottom right !important;
}
`;

  document.head.appendChild(style);
}

export default function TawkToChat() {
  const { pathname } = useLocation();

  useEffect(() => {
    ensureTawkStyles();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isAdmin = pathname.startsWith("/admin");
    const api = window.Tawk_API;

    // Only load the widget on website routes.
    // This prevents the chat icon from appearing at all in the admin panel.
    if (!isAdmin) ensureTawkLoaded();

    // If the widget isn't loaded yet, stash the desired visibility and apply on load.
    window.__tawkDesiredVisibility = isAdmin ? "hide" : "show";

    if (api) {
      api.onLoad = () => {
        const desired = window.__tawkDesiredVisibility;
        if (desired === "hide" && typeof api.hideWidget === "function") api.hideWidget();
        if (desired === "show" && typeof api.showWidget === "function") api.showWidget();
      };
    }

    // If already loaded, toggle immediately.
    if (isAdmin) {
      if (typeof api?.hideWidget === "function") api.hideWidget();
    } else {
      if (typeof api?.showWidget === "function") api.showWidget();
    }
  }, [pathname]);

  return null;
}
