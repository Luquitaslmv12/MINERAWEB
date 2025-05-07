import { ArrowRight, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Banner = () => (
  <section
    id="home"
    className="relative bg-cover bg-center bg-no-repeat px-6 py-2 md:py-2 rounded-2xl shadow-xl flex justify-center items-center min-h-[63vh]"
    style={{
      backgroundImage: "url('/camion-minera.jpg')",
      backgroundPosition: "center 45%",
    }}
  >
    {/* Capa de superposición más oscura */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-cyan-900/60"></div>

    {/* Contenido animado */}
    <div className="relative z-10 text-center text-white max-w-6xl px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        MINERA DEL LITORAL S.R.L.
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl font-medium mb-8 text-white/90"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Soluciones confiables en transporte de cargas generales
      </motion.p>

      <motion.a
        href="#contacto"
        aria-label="Ir a la sección de contacto"
        className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:-translate-y-1 transition-transform"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Contáctanos <ArrowRight className="w-5 h-5" />
      </motion.a>
    </div>

    {/* Ícono decorativo */}
    <div
      className="absolute bottom-8 right-8 animate-spin-slow text-cyan-400 opacity-30"
      aria-hidden="true"
      role="img"
    >
      <Globe className="w-20 h-20" />
    </div>
  </section>
);

export default Banner;
