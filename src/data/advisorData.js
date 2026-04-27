export const PRINTER_TONER_DB = [
  { brand: "HP", model: "LaserJet Pro M15w", toner: "Tóner HP 48A", points: 150 },
  { brand: "HP", model: "LaserJet P1102w", toner: "Tóner HP 85A", points: 150 },
  { brand: "HP", model: "LaserJet P1005", toner: "Tóner HP 35A", points: 150 },
  { brand: "Samsung", model: "ML-2165W", toner: "Tóner Samsung MLT-D101", points: 150 },
  { brand: "Samsung", model: "Xpress M2020", toner: "Tóner Samsung MLT-D111S", points: 150 },
  { brand: "Brother", model: "HL-1200", toner: "Tóner Brother TN-1060", points: 150 },
  { brand: "Brother", model: "DCP-1617NW", toner: "Tóner Brother TN-1060", points: 150 },
  { brand: "Brother", model: "HL-L2360DW", toner: "Tóner Brother TN-2370", points: 150 },
  { brand: "Epson", model: "EcoTank L3150", toner: "Botellas Epson T544", points: 100 },
  { brand: "Epson", model: "EcoTank L3250", toner: "Botellas Epson T544", points: 100 },
  { brand: "Epson", model: "L210", toner: "Botellas Epson T664", points: 100 },
  { brand: "Epson", model: "L3110", toner: "Botellas Epson T544", points: 100 }
];

export const ADVISOR_QUESTIONS = [
  {
    id: "category",
    question: "¿Qué tipo de equipo estás buscando?",
    options: [
      { id: "gaming", label: "Para Jugar (Gaming)", icon: "Gamepad2" },
      { id: "office", label: "Para Oficina o Estudio", icon: "Briefcase" },
      { id: "design", label: "Para Diseño o Edición", icon: "PenTool" }
    ]
  },
  {
    id: "usage",
    question: "¿Cuál será el uso principal que le darás?",
    options: {
      gaming: [
        { id: "casual", label: "Juegos casuales (LoL, CS:GO, Valorant)" },
        { id: "heavy", label: "Juegos pesados en gráficos ultra (Cyberpunk, AAA)" }
      ],
      office: [
        { id: "basic", label: "Navegar, Word, Excel, Zoom" },
        { id: "multitask", label: "Múltiples programas a la vez, bases de datos" }
      ],
      design: [
        { id: "2d", label: "Diseño gráfico 2D (Photoshop, Illustrator)" },
        { id: "3d", label: "Edición de video 4K o modelado 3D (Premiere, Blender)" }
      ]
    }
  },
  {
    id: "budget",
    question: "¿Qué prioridad tienes para esta compra?",
    options: [
      { id: "economy", label: "Buscar la opción más económica y rendidora" },
      { id: "balanced", label: "Busco un equilibrio perfecto entre precio y rendimiento" },
      { id: "premium", label: "Quiero el mejor rendimiento sin importar el precio" }
    ]
  }
];

export const ADVISOR_RESULTS = {
  gaming: {
    title: "¡Genial! Un setup Gamer es lo tuyo 🎮",
    message: "Para disfrutar de los juegos al máximo, la pieza clave de tu equipo será la **Placa de Video (GPU)**. Además, necesitarás un buen procesador para evitar cuellos de botella y memoria RAM rápida para que todo fluya.",
    products: [
      {
        tier: "economy",
        name: "PC Gamer Entry Level",
        desc: "Procesador AMD Ryzen 5 con gráficos integrados Vega o GPU GTX 1650, 16GB RAM. Perfecta para esports.",
        price: "Consultar",
        points: 500
      },
      {
        tier: "balanced",
        name: "PC Gamer Mid-Range",
        desc: "Procesador Intel Core i5 / Ryzen 5, Placa de video RTX 3060 o RX 6600, 16GB RAM, SSD 1TB. Ideal para jugar en 1080p Ultra.",
        price: "Consultar",
        points: 1000
      },
      {
        tier: "premium",
        name: "PC Gamer Ultra",
        desc: "Procesador Intel Core i7 / Ryzen 7, Placa de video RTX 4070 o superior, 32GB RAM, SSD NVMe 1TB/2TB.",
        price: "Consultar",
        points: 1500
      }
    ]
  },
  office: {
    title: "Productividad y rapidez para tu día a día 💼",
    message: "Para trabajar o estudiar sin interrupciones, no necesitas gastar en una placa de video cara. Lo más importante es tener un **Disco de Estado Sólido (SSD)** para que todo abra al instante y suficiente **Memoria RAM** para tener muchas pestañas abiertas.",
    products: [
      {
        tier: "economy",
        name: "Notebook / PC Oficina Standard",
        desc: "Procesador Intel Core i3 / AMD Athlon, 8GB RAM, SSD 240GB. Ideal para tareas administrativas básicas.",
        price: "Consultar",
        points: 300
      },
      {
        tier: "balanced",
        name: "Setup Oficina Plus",
        desc: "Procesador Intel Core i5 / Ryzen 5, 16GB RAM, SSD 500GB. Excelente fluidez para varias aplicaciones abiertas.",
        price: "Consultar",
        points: 600
      },
      {
        tier: "premium",
        name: "Setup Ejecutivo Multitasking",
        desc: "Procesador Intel Core i7 / Ryzen 7, 32GB RAM, SSD NVMe 1TB. Velocidad extrema para bases de datos y multitarea pesada.",
        price: "Consultar",
        points: 1000
      }
    ]
  },
  design: {
    title: "Potencia bruta para crear sin límites 🎨",
    message: "El diseño y la edición exigen mucho de la computadora. Necesitas un **Procesador de muchos núcleos** para renderizar rápido, **mucha memoria RAM** (mínimo 16GB/32GB) y una pantalla con buena fidelidad de color.",
    products: [
      {
        tier: "economy",
        name: "Estación de Diseño Inicial",
        desc: "Procesador Ryzen 5 / Core i5, 16GB RAM, SSD 500GB, GPU GTX 1660. Para diseño 2D fluido.",
        price: "Consultar",
        points: 700
      },
      {
        tier: "balanced",
        name: "Workstation Intermedia",
        desc: "Procesador Ryzen 7 / Core i7, 32GB RAM, SSD NVMe 1TB, GPU RTX 3060. Perfecta para edición de video 4K y render 3D básico.",
        price: "Consultar",
        points: 1200
      },
      {
        tier: "premium",
        name: "Workstation Profesional Ultra",
        desc: "Procesador Ryzen 9 / Core i9, 64GB RAM, SSD NVMe Gen4 2TB, GPU RTX 4080. Rendimiento extremo y tiempos de renderizado mínimos.",
        price: "Consultar",
        points: 2000
      }
    ]
  }
};
