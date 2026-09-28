import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { whatsappLink } from "../../data/site";

/** Botón de WhatsApp siempre accesible + atajo para volver arriba. */
export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="volver-arriba"
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            aria-label="Volver arriba"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-steel-900/90 text-steel-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-gold-400/50 hover:text-white"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-[#052e16] shadow-xl shadow-black/40 transition-transform duration-300 hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366]/40" aria-hidden="true" />
        <MessageCircle className="relative h-7 w-7" aria-hidden="true" />
        <span className="pointer-events-none absolute right-full mr-3 hidden rounded-full bg-steel-900 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 lg:block">
          Escribinos por WhatsApp
        </span>
      </a>
    </div>
  );
}
