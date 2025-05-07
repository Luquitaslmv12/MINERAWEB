import React, { useEffect, useState } from "react";
import { Home, Settings, Mail, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const linkClass = (section) =>
    `flex items-center gap-2 py-2 px-4 md:py-0 no-underline transition-colors duration-200 ${
      activeSection === section
        ? "text-white font-semibold underline underline-offset-4 decoration-white"
        : "text-gray-200 hover:text-white"
    }`;

  useEffect(() => {
    const sections = ["home", "servicios", "contacto"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-50% 0px -40% 0px",
        threshold: 0.3,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md text-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 no-underline">
          <img
            src="/Flux_Dev_I_need_a_modern_sleek_logo_for_a_company_featuring_an_0-removebg-preview.png"
            alt="Transporte XYZ"
            className="h-28"
          />
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Menú móvil */}
        <div
          className={`
            absolute top-16 left-0 right-0 bg-gray-900 md:static md:bg-transparent
            transition-all duration-300 ease-in-out overflow-hidden
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            md:max-h-full md:opacity-100
          `}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <a
                href="#home"
                onClick={() => handleLinkClick("home")}
                aria-current={activeSection === "home" ? "page" : undefined}
                className={linkClass("home")}
              >
                <Home className="w-4 h-4" /> Inicio
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                onClick={() => handleLinkClick("servicios")}
                aria-current={
                  activeSection === "servicios" ? "page" : undefined
                }
                className={linkClass("servicios")}
              >
                <Settings className="w-4 h-4" /> Servicios
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                onClick={() => handleLinkClick("contacto")}
                aria-current={activeSection === "contacto" ? "page" : undefined}
                className={linkClass("contacto")}
              >
                <Mail className="w-4 h-4" /> Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
