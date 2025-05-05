import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";

function Nosotros() {
  const images = [
    "/Flux_Dev_I_need_a_modern_sleek_logo_for_a_company_featuring_an_0-removebg-preview.png",
    "/logo-rojo.png",
    "/vecteezy_ai-generated-five-commercial-trucks-are-lined-up-at-sunset_35826431.png",
  ];

  const [centerIndex, setCenterIndex] = useState(1);
  const intervalRef = useRef(null);

  const avanzar = () => {
    setCenterIndex((prev) => (prev + 1) % images.length);
    resetAutoSlide();
  };

  const retroceder = () => {
    setCenterIndex((prev) => (prev - 1 + images.length) % images.length);
    resetAutoSlide();
  };

  const getVisibleImages = () => {
    const prev = (centerIndex - 1 + images.length) % images.length;
    const next = (centerIndex + 1) % images.length;
    return [images[prev], images[centerIndex], images[next]];
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(avanzar, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      stopAutoSlide();
      setTimeout(() => {
        startAutoSlide();
      }, 500);
    }
  };

  const irAIndice = (indice) => {
    setCenterIndex(indice);
    resetAutoSlide();
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: avanzar,
    onSwipedRight: retroceder,
    trackMouse: true,
  });

  return (
    <section
      className="bg-gradient-to-br from-white via-blue-50 to-cyan-100 py-24 px-4"
      id="carrusel"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className="container mx-auto">
        <h2 className="text-center text-3xl sm:text-5xl font-extrabold text-gray-800 mb-16 tracking-tight">
          Galería de Imágenes
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Botón Anterior */}
          <button
            onClick={retroceder}
            className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Carrusel con efecto hover */}
          <div
            {...swipeHandlers}
            className="group flex overflow-hidden gap-6 transition-all duration-1000 ease-in-out"
          >
            {getVisibleImages().map((img, idx) => (
              <div
                key={idx}
                className={`w-full max-w-[350px] sm:w-90 h-64 sm:h-96 bg-center bg-cover rounded-2xl shadow-xl transition-all duration-700 ease-in-out transform ${
                  idx === 1
                    ? "scale-100 opacity-100 z-10 group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-2xl"
                    : "scale-85 opacity-70"
                }`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>

          {/* Botón Siguiente */}
          <button
            onClick={avanzar}
            className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicadores clicables */}
        <div className="flex justify-center mt-6 gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => irAIndice(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === centerIndex
                  ? "bg-cyan-600 scale-125"
                  : "bg-cyan-300 opacity-50"
              }`}
              aria-label={`Ir a imagen ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Nosotros;