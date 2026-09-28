import { useEffect, useState } from "react";

/**
 * Devuelve el id de la sección visible en pantalla.
 * Importante: `ids` debe ser una referencia estable (constante a nivel de módulo).
 */
export default function useScrollSpy(ids, { rootMargin = "-45% 0px -45% 0px" } = {}) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);

    if (!elements.length || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin, threshold: [0, 0.2, 0.5, 1] }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return activeId;
}
