import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer
      className="bg-gray-900 text-gray-200 dark:bg-black dark:text-gray-300 py-10"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Contacto */}
          <div className="text-center md:text-left w-full md:w-1/3">
            <h5 className="text-2xl font-bold mb-4">
              <span className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent hover:bg-opacity-80 transition">
                Contacto
              </span>
            </h5>
            <p className="text-lg">Email: mineradellitoral@gmail.com</p>
            <p className="text-lg">Tel: +54 9 3447432020</p>
            <p className="text-lg">Colón, Entre Ríos</p>
          </div>

          {/* Mapa */}
          <div className="w-full md:w-1/3 mt-8 md:mt-0 text-center">
            <h5 className="text-2xl font-bold mb-4">
              <span className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent hover:bg-opacity-80 transition">
                Nuestra Ubicación
              </span>
            </h5>
            <div className="w-full max-w-sm mx-auto aspect-w-16 aspect-h-9">
              <iframe
                title="Ubicación en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.0913608185388!2d-58.14402032362278!3d-32.228706435991405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ae331e5a8b6f17%3A0x778d4e62934a2e2!2sVieytes%20237%2C%20E3285%20Col%C3%B3n%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1746285017877!5m2!1ses-419!2sar"
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-lg shadow-md border-0"
              />
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="text-center md:text-right w-full md:w-1/3">
            <h5 className="text-2xl font-bold mb-4">
              <span className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent hover:bg-opacity-80 transition">
                Seguinos
              </span>
            </h5>
            <div className="flex justify-center md:justify-end space-x-6">
              <a
                href="https://www.facebook.com/mineradellitoral"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <Facebook size={26} />
              </a>
              <a
                href="https://www.instagram.com/mineradellitoral"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-300 hover:text-pink-500 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <Instagram size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/norma-garnier-8111a139/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <Linkedin size={26} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-base text-gray-400">
          © {new Date().getFullYear()} Transporte Minera del Litoral S.R.L.
          Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
