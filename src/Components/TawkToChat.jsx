import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TAWK_SCRIPT_ID = "tawkto-embed";
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

export default function TawkToChat() {
  const { pathname } = useLocation();

  useEffect(() => {
    ensureTawkLoaded();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isAdmin = pathname.startsWith("/admin");
    const api = window.Tawk_API;

    // If the widget isn't loaded yet, stash the desired visibility and apply on load.
    window.__tawkDesiredVisibility = isAdmin ? "hide" : "show";

    if (api && typeof api.onLoad === "function") {
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
