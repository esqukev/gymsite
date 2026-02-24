// Mock data para FFO GYM

export const gymData = {
  name: "FFO GYM",
  tagline: "", // Dejar vacío como solicitado

  // Hero
  hero: {
    title: "FFO GYM",
    subtitle: "Transforma tu cuerpo, transforma tu vida",
    ctaText: "Reserva tu clase",
    backgroundImage: "https://images.unsplash.com/photo-1758448756350-3d0eec02ba37"
  },

  // Modalidades
  modalities: [
    {
      id: 1,
      name: "Entrenamiento Personalizado",
      description: "Sesiones uno a uno con entrenador dedicado. Plan completamente personalizado según tus objetivos.",
      image: "https://images.unsplash.com/photo-1648542036561-e1d66a5ae2b1",
      features: ["Plan personalizado", "Seguimiento continuo", "Atención exclusiva", "Resultados garantizados"]
    },
    {
      id: 2,
      name: "Entrenamiento Semi-Personalizado",
      description: "Grupos reducidos de 2-4 personas. Atención personalizada en ambiente motivador.",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb",
      features: ["Grupos pequeños", "Precio accesible", "Motivación grupal", "Rutinas adaptadas"]
    },
    {
      id: 3,
      name: "Clases Grupales",
      description: "Clases dinámicas con energía contagiosa. Variedad de disciplinas para todos los niveles.",
      image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
      features: ["Variedad de clases", "Horarios flexibles", "Ambiente energético", "Todos los niveles"]
    },
    {
      id: 4,
      name: "Gimnasio Libre",
      description: "Acceso completo a todas nuestras instalaciones. Entrena a tu ritmo con equipo de última generación.",
      image: "https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg",
      features: ["Acceso 24/7", "Equipo moderno", "Zonas especializadas", "Sin límites"]
    }
  ],

  // Galería de instalaciones
  facilities: [
    { id: 1, name: "Zona de Cardio", image: "https://images.unsplash.com/photo-1761971975769-97e598bf526b", description: "Equipamiento cardiovascular de última generación" },
    { id: 2, name: "Área de Máquinas", image: "https://images.unsplash.com/photo-1765728617805-b9f22d64e5b3", description: "Máquinas modernas para todos los grupos musculares" },
    { id: 3, name: "Zona de Spinning", image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f", description: "Bicis estáticas premium para clases de spinning" },
    { id: 4, name: "Sala de Pesas", image: "https://images.unsplash.com/photo-1578874691223-64558a3ca096", description: "Amplia zona de peso libre y funcional" },
    { id: 5, name: "Equipamiento Especializado", image: "https://images.unsplash.com/photo-1623874106686-5be2b325c8f1", description: "Tecnología fitness de vanguardia" },
    { id: 6, name: "Área de Entrenamiento", image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg", description: "Espacios amplios para entrenamientos versátiles" },
    { id: 7, name: "Zona de Fuerza", image: "https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg", description: "Equipo profesional para desarrollo muscular" },
    { id: 8, name: "Instalaciones Premium", image: "https://images.unsplash.com/photo-1758448756350-3d0eec02ba37", description: "Ambiente moderno y motivador" }
  ],

  // Staff / Equipo (8 trabajadores)
  staff: [
    { id: 1, name: "Carlos Mendoza", role: "Entrenador Principal", specialties: ["Musculación", "Nutrición deportiva"], image: "https://images.unsplash.com/photo-1704223523169-52feeed90365", experience: "8 años de experiencia" },
    { id: 2, name: "María González", role: "Entrenadora Personal", specialties: ["Pérdida de peso", "Acondicionamiento"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b", experience: "6 años de experiencia" },
    { id: 3, name: "Javier Ruiz", role: "Especialista en Fuerza", specialties: ["Powerlifting", "Hipertrofia"], image: "https://images.unsplash.com/photo-1648542036561-e1d66a5ae2b1", experience: "10 años de experiencia" },
    { id: 4, name: "Ana Torres", role: "Instructora de Clases", specialties: ["Spinning", "Fitness grupal"], image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50", experience: "5 años de experiencia" },
    { id: 5, name: "Roberto Sánchez", role: "Entrenador Funcional", specialties: ["CrossFit", "Movilidad"], image: "https://images.pexels.com/photos/2011383/pexels-photo-2011383.jpeg", experience: "7 años de experiencia" },
    { id: 6, name: "Laura Martínez", role: "Coach de Bienestar", specialties: ["Yoga", "Pilates"], image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg", experience: "9 años de experiencia" },
    { id: 7, name: "Diego Fernández", role: "Preparador Físico", specialties: ["Rendimiento deportivo", "Rehabilitación"], image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", experience: "12 años de experiencia" },
    { id: 8, name: "Sofía Ramírez", role: "Entrenadora Wellness", specialties: ["Functional training", "Core"], image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6", experience: "4 años de experiencia" }
  ],

  // INTIZOM - Gimnasio Funcional (Filial)
  intizom: {
    name: "INTIZOM",
    tagline: "Funcional Training Experience",
    description: "Nuestra filial especializada en entrenamiento funcional de alta intensidad. Metodología única que combina fuerza, resistencia y movilidad.",
    features: [
      "Entrenamiento funcional de alto rendimiento",
      "CrossFit y HIIT",
      "Equipamiento especializado (TRX, Kettlebells, Battle Ropes)",
      "Clases dirigidas por expertos certificados",
      "Comunidad motivadora y competitiva"
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3", alt: "Functional Movement Training" },
      { id: 2, url: "https://images.unsplash.com/photo-1578762560042-46ad127c95ea", alt: "Kettlebell Training" },
      { id: 3, url: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg", alt: "Battle Ropes Dynamic Training" }
    ]
  },

  // Información de contacto
  contact: {
    phone: "+34 900 123 456",
    email: "info@ffogym.com",
    address: "Calle Fitness 123, Madrid, España",
    hours: "Lunes a Viernes: 6:00 - 23:00 | Sábados y Domingos: 8:00 - 21:00",
    social: {
      instagram: "@ffogym",
      facebook: "FFOGym",
      twitter: "@ffogym"
    }
  }
};

// Compatibilidad con componentes que usan estos nombres
export const facilities = gymData.facilities.map((f) => ({ ...f, title: f.name }));
export const workers = gymData.staff.map((s) => ({
  id: s.id,
  name: s.name,
  role: s.role,
  image: s.image,
  bio: s.specialties?.join(" · ") || s.experience,
  experience: s.experience
}));
export const stats = [
  { number: "500+", label: "Miembros Activos" },
  { number: "8", label: "Profesionales" },
  { number: "10+", label: "Años de Experiencia" },
  { number: "2", label: "Locaciones" }
];

// Horarios disponibles para reservas
export const availableSlots = [
  "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
  "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
  "18:00", "19:00", "20:00", "21:00", "22:00"
];

// Tipos de servicios para reservas
export const serviceTypes = [
  { id: "personal", name: "Entrenamiento Personalizado" },
  { id: "semi", name: "Entrenamiento Semi-Personalizado" },
  { id: "group", name: "Clase Grupal" },
  { id: "intizom", name: "INTIZOM Funcional" }
];
