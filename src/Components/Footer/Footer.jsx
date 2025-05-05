import React from "react"; 
import {
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Contacto */}
          <div className="text-center md:text-left w-full md:w-1/3">
            <h5 className="text-xl font-bold mb-3 text-white">Contacto</h5>
            <p className="text-sm">Email: mineradellitoral@gmail.com</p>
            <p className="text-sm">Tel: +54 9 3447432020</p>
            <p className="text-sm">Colón, Entre Rios</p>
          </div>


          {/* Mapa */}
          <div className="w-full md:w-1/3 mt-8 md:mt-0 text-center">
            <h5 className="text-xl font-bold text-white mb-4">Nuestra Ubicación</h5>
            <div className="w-full max-w-sm mx-auto">
              <iframe
                title="Ubicación en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.0913608185388!2d-58.14402032362278!3d-32.228706435991405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ae331e5a8b6f17%3A0x778d4e62934a2e2!2sVieytes%20237%2C%20E3285%20Col%C3%B3n%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1746285017877!5m2!1ses-419!2sar" 
                width="100%"
                height="160"  
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          

          {/* Redes Sociales */}
          <div className="text-center md:text-right w-full md:w-1/3">
            <h5 className="text-xl font-bold mb-3 text-white">Seguinos</h5>
            <div className="flex justify-center md:justify-end space-x-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-300 hover:text-blue-500 transition transform hover:scale-110"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-300 hover:text-pink-500 transition transform hover:scale-110"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/norma-garnier-8111a139/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-blue-600 transition transform hover:scale-110"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Transporte Minera del Litoral S.R.L. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;