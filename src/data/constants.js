// ─── CONFIGURACIÓN ────────────────────────────────────────────────────────────
export const CONFIG = {
  whatsapp: "5491167910891",
  telefono: "(0237) 485-2300",
  email: "info@tesysnet.com.ar",
  direccion: "Carlos Pellegrini 955, General Rodríguez, Bs. As.",
  horario1: "Lun a Vie: 9 a 13hs y 15:30 a 19:30hs",
  horario2: "Sábados: 9 a 13hs",
  instagram: "https://www.instagram.com/tesysnet",
  facebook: "https://www.facebook.com/tesys/",
  isiv: "http://www.isiv.edu.ar",
  mapLat: -34.6054,
  mapLng: -58.9507,
};

// ─── PALETA ───────────────────────────────────────────────────────────────────
export const C = {
  cyan: "#00e5ff",
  green: "#00e676",
  dark: "#080f1a",
  darkCard: "#0d1b2e",
  darkBorder: "rgba(0,229,255,0.15)",
  text: "#e2e8f0",
  muted: "#64748b",
};

// ─── DATOS ────────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Nosotros", id: "nosotros" },
  { label: "Productos", id: "productos" },
  { label: "Servicios", id: "servicios" },
  { label: "Educación", id: "educacion" },
  { label: "Contacto", id: "contacto" },
];

export const SERVICES = [
  {
    icon: "🔧",
    title: "Soporte Técnico",
    desc: "Reparación y mantenimiento de PCs, notebooks, impresoras y periféricos para particulares y empresas. Diagnóstico sin cargo y garantía en todos los trabajos.",
    features: ["Reparación de hardware y software", "Formateo y reinstalación", "Mantenimiento preventivo", "Soporte remoto y presencial"],
  },
  {
    icon: "🌐",
    title: "Instalación de Redes",
    desc: "Diseño e instalación de redes LAN, WiFi y mixtas para hogares, oficinas y empresas. Cableado estructurado y configuración de equipos.",
    features: ["Redes LAN y WiFi", "Cableado estructurado Cat5/Cat6", "Configuración de routers y switches", "Diagnóstico y optimización"],
  },
  {
    icon: "💻",
    title: "Desarrollo Web",
    desc: "Creamos sitios web y sistemas a medida para tu negocio. Diseño moderno, responsive y optimizado para buscadores.",
    features: ["Sitios institucionales y portfolios", "Tiendas online (e-commerce)", "Sistemas de gestión a medida", "Mantenimiento y hosting"],
  },
  {
    icon: "📷",
    title: "Sistemas de Seguridad",
    desc: "Instalación y configuración de cámaras IP, DVR/NVR y sistemas de alarma. Monitoreo remoto desde tu celular las 24hs.",
    features: ["Cámaras IP y analógicas", "DVR/NVR con acceso remoto", "Alarmas perimetrales", "Asesoramiento personalizado"],
  },
];

export const PRODUCTS = [
  { name: "Toner HP 85A", category: "Insumos", price: "Consultar", img: null, emoji: "🖨️" },
  { name: "Toner Samsung MLT-D101", category: "Insumos", price: "Consultar", img: null, emoji: "🖨️" },
  { name: "Cartucho Epson T664", category: "Insumos", price: "Consultar", img: null, emoji: "🖨️" },
  { name: "Mouse inalámbrico", category: "Periféricos", price: "Consultar", img: null, emoji: "🖱️" },
  { name: "Teclado USB", category: "Periféricos", price: "Consultar", img: null, emoji: "⌨️" },
  { name: "Auriculares con micrófono", category: "Periféricos", price: "Consultar", img: null, emoji: "🎧" },
  { name: "Memoria RAM DDR4 8GB", category: "Componentes", price: "Consultar", img: null, emoji: "💾" },
  { name: "SSD 240GB", category: "Componentes", price: "Consultar", img: null, emoji: "💽" },
  { name: "Pendrive 64GB", category: "Almacenamiento", price: "Consultar", img: null, emoji: "📦" },
  { name: "Disco externo 1TB", category: "Almacenamiento", price: "Consultar", img: null, emoji: "💿" },
  { name: "Cable HDMI 1.8m", category: "Cables", price: "Consultar", img: null, emoji: "🔌" },
  { name: "Cable UTP Cat6 x metro", category: "Cables", price: "Consultar", img: null, emoji: "🔌" },
];

export const PRODUCT_CATS = ["Todos", "Insumos", "Periféricos", "Componentes", "Almacenamiento", "Cables"];

export const COURSES_PRESENCIAL = [
  { name: "IA para tu negocio", duration: "A confirmar", level: "Intermedio", desc: "Uso de inteligencia artificial en el ámbito cotidiano y profesional: LLMs, ChatGPT, GPTs, Prompt Engineering y más." },
  { name: "Operación profesional de PC", duration: "12 meses", level: "Principiante", desc: "Manejo completo de Windows y herramientas Office: Word, Excel, Access, PowerPoint, Outlook, Internet y mantenimiento." },
  { name: "Master en PC", duration: "A confirmar", level: "Avanzado", desc: "Excel y Access avanzados, desarrollo de macros y programas de aplicación con conocimientos avanzados de Windows." },
  { name: "Informática para jóvenes y mayores", duration: "A confirmar", level: "Principiante", desc: "Para quienes nunca tuvieron contacto con una computadora. Internet, textos y fotografías orientados a cada necesidad." },
  { name: "Computación para niños", duration: "A confirmar", level: "Principiante", desc: "Desde los 6 años. Métodos pedagógicos con software educativo que ayudan en la vida escolar." },
  { name: "Diseño gráfico", duration: "A confirmar", level: "Intermedio", desc: "PageMaker, Corel Draw, Photoshop e Illustrator. Herramientas profesionales de diseño." },
  { name: "Excel para empresas", duration: "A confirmar", level: "Avanzado", desc: "Automatización de reportes, bases de datos, análisis de grandes volúmenes de datos y dashboards." },
  { name: "Administrador de base de datos", duration: "A confirmar", level: "Avanzado", desc: "Domina Access: diseñá sistemas de escritorio que organicen, conecten y protejan la información de tu empresa." },
  { name: "Reparación y armado de PC", duration: "A confirmar", level: "Avanzado", desc: "Diagnóstico de fallas, conceptos de hardware, simulación de fallas, armado de PC y software de reparación." },
  { name: "Analista programador", duration: "A confirmar", level: "Avanzado", desc: "Desarrollo de sistemas de computación, análisis y codificación con Visual Basic." },
];

export const STATS = [
  { value: 40, suffix: "+", label: "Años de experiencia" },
  { value: 3000, suffix: "+", label: "Alumnos formados" },
  { value: 98, suffix: "%", label: "Satisfacción" },
  { value: 500, suffix: "+", label: "Reparaciones al año" },
];

export const TESTIMONIALS = [
  { name: "María G.", text: "Llevé mi notebook que no encendía y en 48hs estaba lista. Excelente atención y precio justo." },
  { name: "Carlos R.", text: "Hice el curso de Excel y cambió mi forma de trabajar. Los profes explican muy bien." },
  { name: "Laura M.", text: "Compro los insumos para la oficina siempre acá. Tienen todo y son muy confiables." },
];
