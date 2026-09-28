import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Servicios from "./Components/Servicios/Servicios";
import Nosotros from "./Components/Nosotros/Nosotros";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";
import FloatingActions from "./Components/FloatingActions/FloatingActions";

export default function App() {
  return (
    <div className="relative min-h-screen bg-steel-950">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-gold-400 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-steel-950"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido" tabIndex={-1}>
        <Banner />
        <Servicios />
        <Nosotros />
        <Contacto />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
