import React, { useEffect, useState } from 'react';
import { Home, Settings, Mail, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const linkClass = (section) =>
    `flex items-center gap-2 py-2 md:py-0 no-underline transition-colors duration-200 ${
      activeSection === section
        ? 'text-white font-semibold underline underline-offset-4 decoration-white'
        : 'text-gray-200 hover:text-white'
    }`;

  useEffect(() => {
    const sections = ['home', 'servicios', 'contacto'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-50% 0px -40% 0px', // ajusta cuándo se considera visible
        threshold: 0.3,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md text-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Reemplazamos el texto con el logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <img
            src="/Flux_Dev_I_need_a_modern_sleek_logo_for_a_company_featuring_an_0-removebg-preview.png" // Reemplaza con la ruta de tu logo
            alt="Transporte XYZ"
            className="h-28"  // Puedes ajustar el tamaño con h-10 o el valor que necesites
          />
        </a>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 w-full md:w-auto mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 w-full md:w-auto">
            <li>
              <a
                href="#home"
                onClick={() => setActiveSection('home')}
                className={linkClass('home')}
              >
                <Home className="w-4 h-4" /> Inicio
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                onClick={() => setActiveSection('servicios')}
                className={linkClass('servicios')}
              >
                <Settings className="w-4 h-4" /> Servicios
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                onClick={() => setActiveSection('contacto')}
                className={linkClass('contacto')}
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