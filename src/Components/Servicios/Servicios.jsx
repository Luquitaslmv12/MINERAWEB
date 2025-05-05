import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Truck, Cog, Flag, Car, Snowflake, Boxes,
} from "lucide-react";

function Servicios() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const servicios = [
    {
      icon: <Truck className="w-12 h-12 text-cyan-400 mb-4 animate-float" />,
      titulo: "Transporte Nacional",
      descripcion: "Realizamos envíos a todo el país con seguimiento en tiempo real.",
    },
    {
      icon: <Cog className="w-12 h-12 text-cyan-400 mb-4 animate-float" />,
      titulo: "Materiales de Construcción",
      descripcion: "Para el transporte de cemento, ladrillos, madera, entre otros.",
    },
    {
      icon: <Car className="w-12 h-12 text-cyan-400 mb-4 animate-float" />,
      titulo: "Transporte de Vehículos",
      descripcion: "Traslado de vehículos o maquinaria liviana.",
    },
    {
      icon: <Snowflake className="w-12 h-12 text-cyan-400 mb-4 animate-float" />,
      titulo: "Carga Refrigerada",
      descripcion: "Vehículos equipados para mantener la cadena de frío durante todo el trayecto.",
    },
    {
      icon: <Boxes className="w-12 h-12 text-cyan-400 mb-4 animate-float" />,
      titulo: "Logística y Distribución",
      descripcion: "Soluciones integrales de almacenamiento y distribución para tu empresa.",
    },
    {
      icon: <Flag className="w-12 h-12 text-cyan-400 mb-4 animate-float" />,
      titulo: "Transporte Internacional",
      descripcion: "Traslado de mercancías a países del Mercosur.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-cyan-100 py-24 px-4" id="servicios">
      <div className="container mx-auto">
        <h2
          className="text-center text-5xl font-extrabold text-gray-800 mb-16 tracking-tight"
          data-aos="fade-up"
        >
          Nuestros Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {servicios.map((servicio, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="flex flex-col items-center text-center">
                {servicio.icon}
                <h5 className="text-2xl font-semibold text-gray-800 mb-3">
                  {servicio.titulo}
                </h5>
                <p className="text-gray-600">{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;