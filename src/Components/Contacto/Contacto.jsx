import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, XCircle, Info } from "lucide-react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const [isClicked, setIsClicked] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensajeTexto, setMensajeTexto] = useState("");

  const formRef = useRef();
  const timeoutRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);

    if (!nombre || !email || !mensajeTexto) {
      setIsSuccess(null);
      setMessage("Por favor, completa todos los campos correctamente.");
      setShowMessage(true);
      timeoutRef.current = setTimeout(() => setShowMessage(false), 5000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsSuccess(null);
      setMessage("Por favor, ingresa un email válido.");
      setShowMessage(true);
      timeoutRef.current = setTimeout(() => setShowMessage(false), 5000);
      return;
    }

    emailjs
      .sendForm(
        "service_gd4w36e", // Reemplaza con tu Service ID
        "template_k8ve6d8", // Reemplaza con tu Template ID
        formRef.current,
        "onJd4b7yydxzDcOZ4" // Reemplaza con tu Public Key
      )
      .then(
        () => {
          setIsSuccess(true);
          setMessage(
            "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto."
          );
          setShowMessage(true);
          setNombre("");
          setEmail("");
          setMensajeTexto("");
          timeoutRef.current = setTimeout(() => setShowMessage(false), 5000);
        },
        (error) => {
          console.error(error.text);
          setIsSuccess(false);
          setMessage("Hubo un error al enviar el mensaje. Intenta nuevamente.");
          setShowMessage(true);
          timeoutRef.current = setTimeout(() => setShowMessage(false), 5000);
        }
      );
  };

  // Lógica para el botón de WhatsApp
  const phone = "5493447432091";
  const text = "Hola! Quiero más información";
  const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
  const whatsappUrl = isMobile
    ? `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
        text
      )}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
        text
      )}`;

  return (
    <section className="relative py-24 px-4 text-white" id="contacto">
      {/* Se eliminó la imagen de fondo y el gradiente */}
      <div className="relative z-10 container mx-auto">
        <h2
          className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-16 tracking-tight"
          data-aos="fade-up"
        >
          Contacto
        </h2>

        <div className="flex justify-center">
          <div
            className="w-full md:w-2/3 lg:w-1/2 bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-xl hover:shadow-cyan-400/50 transition-all duration-500"
            data-aos="zoom-in"
          >
            <form ref={formRef} className="space-y-6">
              <div>
                <label
                  htmlFor="formNombre"
                  className="block text-sm font-medium text-white/80"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="formNombre"
                  name="user_name"
                  aria-label="Nombre"
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="formEmail"
                  className="block text-sm font-medium text-white/80"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="formEmail"
                  name="user_email"
                  aria-label="Email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="formMensaje"
                  className="block text-sm font-medium text-white/80"
                >
                  Mensaje
                </label>
                <textarea
                  id="formMensaje"
                  name="message"
                  aria-label="Mensaje"
                  rows="4"
                  placeholder="Escribí tu consulta"
                  value={mensajeTexto}
                  onChange={(e) => setMensajeTexto(e.target.value)}
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-4 bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold rounded-lg transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-white ${
                  isClicked ? "animate-pulse-on-click" : ""
                }`}
                onClick={handleClick}
                aria-label="Enviar mensaje"
              >
                Enviar Mensaje
              </button>
            </form>

            {showMessage && (
              <div
                className={`mt-6 p-4 text-center rounded-lg transition-all duration-500 ease-in-out transform ${
                  isSuccess
                    ? "bg-green-500"
                    : isSuccess === false
                    ? "bg-red-500"
                    : "bg-yellow-500"
                } text-white font-semibold`}
                data-aos="fade-up"
              >
                {isSuccess && <CheckCircle className="w-6 h-6 inline mr-2" />}
                {isSuccess === false && (
                  <XCircle className="w-6 h-6 inline mr-2" />
                )}
                {isSuccess === null && <Info className="w-6 h-6 inline mr-2" />}
                {message}
              </div>
            )}
          </div>
        </div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-500"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2.003a10.003 10.003 0 00-8.29 15.52L2 22l4.61-1.7a10.005 10.005 0 101.43-18.297zm5.49 13.9c-.23.65-1.33 1.28-1.84 1.36-.47.08-1.06.12-1.71-.11-.39-.14-.89-.29-1.54-.57-2.71-1.18-4.48-3.89-4.62-4.07-.13-.17-1.1-1.46-1.1-2.79 0-1.33.7-1.98.95-2.26.23-.26.6-.38.95-.38.12 0 .23 0 .33.01.29.01.44.03.64.5.24.59.83 2.05.91 2.2.08.14.13.3.03.48-.09.18-.14.29-.27.45-.13.15-.28.34-.4.45-.13.14-.27.3-.12.58.17.29.75 1.23 1.6 1.99 1.1.98 2.03 1.28 2.32 1.43.29.15.46.13.63-.08.17-.21.73-.86.92-1.16.2-.29.38-.24.64-.14.26.09 1.67.79 1.95.94.29.15.48.22.55.35.07.14.07.76-.16 1.41z" />
        </svg>
      </a>
    </section>
  );
}

export default Contacto;
