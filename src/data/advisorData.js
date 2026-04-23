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
      { id: "premium", label: "Quiero el mejor rendimiento sin importar tanto el precio" }
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
        tier: "premium",
        name: "PC Gamer Ultra",
        desc: "Procesador Intel Core i7 / Ryzen 7, Placa de video RTX 4060 o superior, 32GB RAM, SSD NVMe 1TB.",
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
        desc: "Procesador Intel Core i3 / AMD Athlon, 8GB RAM, SSD 240GB. Ideal para tareas administrativas.",
        price: "Consultar",
        points: 300
      },
      {
        tier: "premium",
        name: "Setup Ejecutivo Multitasking",
        desc: "Procesador Intel Core i5 / Ryzen 5, 16GB RAM, SSD 500GB. Fluidez absoluta con múltiples programas.",
        price: "Consultar",
        points: 800
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
        desc: "Procesador Ryzen 5 / Core i5, 16GB RAM, SSD 500GB, GPU GTX 1660.",
        price: "Consultar",
        points: 700
      },
      {
        tier: "premium",
        name: "Workstation Profesional",
        desc: "Procesador Ryzen 9 / Core i9, 32GB/64GB RAM, SSD NVMe Gen4 1TB, GPU RTX 4070. Rendimiento extremo.",
        price: "Consultar",
        points: 2000
      }
    ]
  }
};
