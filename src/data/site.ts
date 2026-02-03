export const site = {
  name: "Gimnasio Full Forma",
  slogan: "Cambia tu vida en un solo CLICK",
  address: "Jirón Bolognesi 227, Trujillo 13001, Perú",
  streetAddress: "Jirón Bolognesi 227",
  locality: "Trujillo",
  postalCode: "13001",
  country: "PE",
  phoneDisplay: "(044) 225811",
  phoneInternational: "+51 44 225811",
  phoneLink: "tel:+5144225811",
  whatsappDisplay: "+51 979 791 869",
  whatsappLink: "https://wa.me/51979791869",
  email: "fullforma_227@outlook.com",
  coords: {
    lat: -8.1114105,
    lng: -79.0319458
  },
  mapsLink: "https://maps.app.goo.gl/94ND4QdQE2pcS4f69",
  rating: 4.2,
  reviewsCount: 312,
  services: ["Musculación", "Cardio", "Funcional", "Sala grupal"],
  classes: ["Baile", "Aeróbicos", "Spinning", "Yoga", "Zumba", "Funcional"],
  amenities: ["Sauna", "Cafetería"],
  accessibility: ["Estacionamiento accesible"],
  payments: ["Tarjetas de crédito", "Tarjetas de débito"],
  promos: [
    {
      id: "anual",
      name: "Plan Anual",
      badge: "25% descuento",
      description: "Compromiso anual para resultados premium con acceso total a musculación, cardio, funcional y sala grupal.",
      whatsapp:
        "https://wa.me/51979791869?text=Hola%20Full%20Forma%2C%20quiero%20info%20del%20Plan%20Anual%20con%2025%25%20de%20descuento.%20%C2%BFCondiciones%20y%20vigencia%3F",
      note: "Condiciones por confirmar. Escríbenos por WhatsApp."
    },
    {
      id: "duplica",
      name: "Plan Duplica",
      badge: "3+3 meses",
      description: "Activa 3 meses y entrena 6 con continuidad para sostener tu avance.",
      whatsapp:
        "https://wa.me/51979791869?text=Hola%20Full%20Forma%2C%20quiero%20info%20del%20Plan%20Duplica%203%2B3.%20%C2%BFCondiciones%20y%20c%C3%B3mo%20aplica%3F",
      note: "Condiciones por confirmar. Escríbenos por WhatsApp."
    },
    {
      id: "grupal",
      name: "Plan Grupal",
      badge: "5 meses",
      description: "Entrena con tu grupo y sostén el hábito con un plan pensado para equipos.",
      whatsapp:
        "https://wa.me/51979791869?text=Hola%20Full%20Forma%2C%20quiero%20info%20del%20Plan%20Grupal%20de%205%20meses.%20%C2%BFPara%20cu%C3%A1ntas%20personas%20aplica%20y%20condiciones%3F",
      note: "Condiciones por confirmar. Escríbenos por WhatsApp."
    }
  ],
  testimonials: [
    {
      name: "V.G.",
      text:
        "Me gusta bastante porque es muy espacioso, limpio y ordenado, el personal es muy amable y tienen bastantes máquinas."
    },
    {
      name: "Etty Peña",
      text: "Buenas instalaciones, buena cafetería, Carlos es muy amable."
    },
    {
      name: "Eduardo M.",
      text: "Bien equipado y los equipos mantenidos en condiciones aceptables."
    }
  ]
} as const;

export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Planes", href: "/planes" },
  { label: "Clases", href: "/clases" },
  { label: "Instalaciones", href: "/instalaciones" },
  { label: "Ubicación", href: "/ubicacion" },
  { label: "Contacto", href: "/contacto" },
  { label: "FAQ", href: "/faq" }
] as const;
