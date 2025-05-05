import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from './Components/Banner/Banner'
import Servicios from "./Components/Servicios/Servicios";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";
import Nosotros from "./Components/Nosotros/Nosotros";


export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Servicios />
      <Nosotros />
      <Contacto />
      <Footer />
    </div>
  );
}




