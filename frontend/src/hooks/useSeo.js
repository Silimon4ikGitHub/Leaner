import { useEffect } from "react";

const ensureMeta = (name, attr = "name") => {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  return el;
};

/**
 * Update <title>, meta description, OG/Twitter tags and canonical link on
 * every route change. Critical for SPA discoverability in Google.
 */
const useSeo = ({ title, description, path = "/" }) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      ensureMeta("description").setAttribute("content", description);
      ensureMeta("og:title", "property").setAttribute("content", title || "");
      ensureMeta("og:description", "property").setAttribute(
        "content",
        description,
      );
      ensureMeta("twitter:title").setAttribute("content", title || "");
      ensureMeta("twitter:description").setAttribute("content", description);
    }

    const url = `https://leaner.ch${path === "/" ? "/" : path}`;
    ensureMeta("og:url", "property").setAttribute("content", url);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path]);
};

export default useSeo;
