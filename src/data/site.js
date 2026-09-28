import {
  Boxes,
  Building2,
  Car,
  Clock,
  Flag,
  Handshake,
  Headset,
  Home,
  Images,
  Mail,
  PackageCheck,
  Route,
  ShieldCheck,
  Snowflake,
  Truck,
  Users,
} from "lucide-react";

/* ==========================================================================
   Datos centralizados del sitio.
   Todo el contenido editable (textos, contacto, servicios, imágenes) vive acá
   para que los componentes se limiten a la presentación.
   ========================================================================== */

export const brand = {
  name: "Minera del Litoral",
  legal: "Minera del Litoral S.R.L.",
  slogan: "Soluciones confiables en transporte de cargas generales",
  logo: "/Flux_Dev_I_need_a_modern_sleek_logo_for_a_company_featuring_an_0-removebg-preview.png",
  description:
    "Empresa de transporte de cargas generales con base en Colón, Entre Ríos. Movemos materiales, maquinaria y mercadería con coordinación directa y seguimiento del viaje.",
};

export const contact = {
  phoneDisplay: "+54 9 344 744 8045",
  phoneRaw: "5493447448045",
  email: "mineradellitoral@gmail.com",
  address: "Vieytes 237, E3285 Colón, Entre Ríos",
  hours: "Lunes a viernes, 8 a 18 h",
  whatsappMessage: "¡Hola! Quisiera consultar por un servicio de transporte.",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.0913608185388!2d-58.14402032362278!3d-32.228706435991405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ae331e5a8b6f17%3A0x778d4e62934a2e2!2sVieytes%20237%2C%20E3285%20Col%C3%B3n%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1746285017877!5m2!1ses-419!2sar",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Vieytes%20237%2C%20E3285%20Col%C3%B3n%2C%20Entre%20R%C3%ADos",
};

/** Credenciales de EmailJS (se pueden sobreescribir con variables de entorno). */
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_yf8ercb",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_k8ve6d8",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "onJd4b7yydxzDcOZ4",
};

export const navLinks = [
  { id: "inicio", label: "Inicio", icon: Home },
  { id: "servicios", label: "Servicios", icon: Truck },
  { id: "nosotros", label: "Nosotros", icon: Building2 },
  { id: "galeria", label: "Galería", icon: Images },
  { id: "contacto", label: "Contacto", icon: Mail },
];

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/mineradellitoral", network: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/mineradellitoral", network: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/norma-garnier-8111a139/", network: "linkedin" },
];

export const trustItems = [
  {
    icon: ShieldCheck,
    title: "Seguridad en cada viaje",
    description: "Unidades controladas, conductores habilitados y carga sujeta con procedimiento.",
  },
  {
    icon: Route,
    title: "Cobertura nacional y Mercosur",
    description: "Operamos en todo el país y en los países limítrofes del Mercosur.",
  },
  {
    icon: Clock,
    title: "Seguimiento en ruta",
    description: "Informamos el avance del viaje y coordinamos cada entrega en puerta.",
  },
  {
    icon: Handshake,
    title: "Atención directa",
    description: "Hablás siempre con quien coordina tu carga, sin intermediarios.",
  },
];

export const services = [
  {
    icon: Truck,
    title: "Transporte nacional",
    description:
      "Envíos de cargas generales a todo el país con coordinación de retiro, viaje y entrega en puerta.",
    highlights: ["Cargas completas y parciales", "Retiro y entrega en puerta", "Seguimiento del viaje"],
  },
  {
    icon: Building2,
    title: "Materiales de construcción",
    description:
      "Cemento, áridos, ladrillos y madera: el transporte que el rubro de la obra necesita, con descarga coordinada.",
    highlights: ["Cemento, áridos y madera", "Descarga coordinada en obra", "Cargas de gran volumen"],
  },
  {
    icon: Snowflake,
    title: "Carga refrigerada",
    description:
      "Equipos preparados para sostener la cadena de frío durante todo el trayecto, con control de temperatura.",
    highlights: ["Cadena de frío continua", "Productos perecederos", "Control durante el viaje"],
  },
  {
    icon: Car,
    title: "Vehículos y maquinaria",
    description:
      "Traslado de vehículos, maquinaria liviana y equipos sobre plataforma, con sujeción y resguardo adecuados.",
    highlights: ["Plataformas para equipos", "Sujeción y resguardo", "Carga y descarga asistida"],
  },
  {
    icon: Boxes,
    title: "Logística y distribución",
    description:
      "Consolidación de mercadería y distribución regional para abastecer tu operación de forma regular.",
    highlights: ["Consolidado de cargas", "Entregas programadas", "Distribución regional"],
  },
  {
    icon: Flag,
    title: "Transporte internacional",
    description:
      "Cargas hacia y desde los países del Mercosur, con la documentación y el acompañamiento necesarios.",
    highlights: ["Destinos en el Mercosur", "Documentación al día", "Coordinación en frontera"],
  },
];

export const values = [
  {
    icon: ShieldCheck,
    title: "Seguridad operativa",
    description:
      "Revisamos unidad, sujeción y documentación antes de cada salida. La carga llega como salió.",
  },
  {
    icon: Users,
    title: "Equipo propio",
    description:
      "El mismo equipo que cotiza tu viaje es el que lo sigue en ruta y responde cuando lo necesitás.",
  },
  {
    icon: Headset,
    title: "Comunicación permanente",
    description:
      "Un contacto directo por teléfono o WhatsApp para saber dónde está tu carga en todo momento.",
  },
  {
    icon: PackageCheck,
    title: "Compromiso con los plazos",
    description:
      "Planificamos los tiempos de carga y descarga junto a tu operación para cumplir la entrega.",
  },
];

export const aboutImage = {
  src: "/camion-minera-1600.jpg",
  alt: "Camión Volvo con lona identificado como Minera del Litoral circulando por la ruta al atardecer",
  width: 1600,
  height: 1600,
};

export const gallery = [
  {
    src: "/2.jpeg",
    alt: "Unidad Mercedes-Benz de Minera del Litoral cargando madera aserrada sobre la balanza del predio",
    caption: "Carga y control de peso",
    width: 1600,
    height: 900,
  },
  {
    src: "/4.jpeg",
    alt: "Camión Minera del Litoral S.R.L. con acoplado jaula circulando por un camino de ripio",
    caption: "En ruta con acoplado jaula",
    width: 1280,
    height: 720,
  },
  {
    src: "/3.jpeg",
    alt: "Camión con semirremolque plataforma cargado de madera junto a los galpones del predio",
    caption: "Unidad completa con madera",
    width: 1280,
    height: 592,
  },
  {
    src: "/1.jpeg",
    alt: "Camión con acoplado cargado de madera en el predio de carga, junto al depósito de arena",
    caption: "Operación de carga en el predio",
    width: 720,
    height: 1280,
  },
];

/** Tipos de consulta del formulario de contacto. */
export const serviceOptions = [
  "Transporte nacional",
  "Materiales de construcción",
  "Carga refrigerada",
  "Vehículos y maquinaria",
  "Logística y distribución",
  "Transporte internacional",
  "Otra consulta",
];

/** Enlace de WhatsApp adaptado a móvil / escritorio. */
export function whatsappLink(text = contact.whatsappMessage) {
  const isMobile =
    typeof navigator !== "undefined" && /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
  const base = isMobile ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send";

  return `${base}?phone=${contact.phoneRaw}&text=${encodeURIComponent(text)}`;
}
