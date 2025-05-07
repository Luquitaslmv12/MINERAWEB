import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Truck, Cog, Flag, Car, Snowflake, Boxes } from "lucide-react";

function Servicios() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const servicios = [
    {
      icon: <Truck className="w-12 h-12 text-yellow-300 mb-4 animate-float" />,
      titulo: "Transporte Nacional",
      descripcion:
        "Realizamos envíos a todo el país con seguimiento en tiempo real.",
    },
    {
      icon: <Cog className="w-12 h-12 text-yellow-300 mb-4 animate-float" />,
      titulo: "Materiales de Construcción",
      descripcion:
        "Para el transporte de cemento, ladrillos, madera, entre otros.",
    },
    {
      icon: <Car className="w-12 h-12 text-yellow-300 mb-4 animate-float" />,
      titulo: "Transporte de Vehículos",
      descripcion: "Traslado de vehículos o maquinaria liviana.",
    },
    {
      icon: (
        <Snowflake className="w-12 h-12 text-yellow-300 mb-4 animate-float" />
      ),
      titulo: "Carga Refrigerada",
      descripcion:
        "Vehículos equipados para mantener la cadena de frío durante todo el trayecto.",
    },
    {
      icon: <Boxes className="w-12 h-12 text-yellow-300 mb-4 animate-float" />,
      titulo: "Logística y Distribución",
      descripcion:
        "Soluciones integrales de almacenamiento y distribución para tu empresa.",
    },
    {
      icon: <Flag className="w-12 h-12 text-yellow-300 mb-4 animate-float" />,
      titulo: "Transporte Internacional",
      descripcion: "Traslado de mercancías a países del Mercosur.",
    },
  ];

  return (
    <section className="relative py-24 px-4" id="servicios">
      <div className="container mx-auto">
        <h2
          className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-16 tracking-tight"
          data-aos="fade-up"
        >
          Nuestros Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {servicios.map((servicio, idx) => (
            <div
              key={idx}
              className="bg-cyan-800/90 text-white p-8 rounded-2xl shadow-xl ring-1 ring-white/10 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 hover:brightness-110"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="flex flex-col items-center text-center">
                {servicio.icon}
                <h5 className="text-2xl font-semibold mb-3">
                  {servicio.titulo}
                </h5>
                <p className="text-white/80">{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;
