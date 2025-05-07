import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";

function Nosotros() {
  const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg"];

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
    <section className="py-24 px-4" id="carrusel">
      <div className="container mx-auto">
        <h2 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-16 tracking-tight">
          Galería
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Botón Anterior */}
          <button
            onClick={retroceder}
            className="bg-cyan-600 hover:bg-cyan-500 text-white p-3 rounded-full shadow-lg transition"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Carrusel */}
          <div
            {...swipeHandlers}
            className="group flex justify-center overflow-hidden gap-6 transition-all duration-1000 ease-in-out w-full mx-auto"
          >
            {getVisibleImages().map((img, idx) => (
              <div
                key={idx}
                className={`w-full sm:max-w-[350px] h-64 sm:h-96 bg-center bg-cover rounded-2xl shadow-xl transition-all duration-700 ease-in-out transform ${
                  idx === 1
                    ? "scale-100 opacity-100 z-10 group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-2xl"
                    : "scale-85 opacity-60"
                } flex-shrink-0`}
                style={{ backgroundImage: `url(${img})` }}
                onMouseEnter={stopAutoSlide} // Detener el carrusel al pasar el ratón sobre la imagen
                onMouseLeave={startAutoSlide} // Reanudar el carrusel cuando se sale de la imagen
              />
            ))}
          </div>

          {/* Botón Siguiente */}
          <button
            onClick={avanzar}
            className="bg-cyan-600 hover:bg-cyan-500 text-white p-3 rounded-full shadow-lg transition"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-6 gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => irAIndice(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === centerIndex
                  ? "bg-cyan-400 scale-125"
                  : "bg-cyan-200 opacity-50"
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
