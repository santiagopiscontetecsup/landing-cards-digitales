export const homeData = {
  hero: {
    title: '¡Crea tu menú digital ',
    highlight: 'profesional en minutos!',
    subtitle: 'Impulsa tu restaurante.',
    description:
      'Descubre oportunidades para modernizar tu negocio con menús digitales atractivos, personalizables y listos para compartir con tus clientes.',
    benefits: [
      { icon: 'CheckCircle2', text: 'Registro gratuito' },
      { icon: 'Shield', text: 'Datos protegidos' },
      { icon: 'CreditCard', text: 'Múltiples planes' },
    ],
    cta: {
      primary: {
        label: 'Quiero crear mi menú',
        href: '/register',
      },
      secondary: {
        label: '¿Quieres contratar?',
        href: '#pricing',
      },
    },
  },
  about: {
    title: '¿Qué es DailyMenu?',
    description:
      'DailyMenu es una plataforma peruana que permite a restaurantes, cafeterías y negocios gastronómicos crear menús digitales profesionales de manera rápida y sencilla, mejorando la experiencia de sus clientes.',
    cards: [
      {
        icon: 'Smartphone',
        title: 'Conecta con tus clientes',
        description:
          'Comparte tu menú digital a través de un enlace o código QR para que tus clientes accedan desde cualquier dispositivo móvil, tablet o computadora.',
        color: 'text-[#406D96]',
      },
      {
        icon: 'Zap',
        title: 'Actualiza al instante',
        description:
          'Modifica precios, platos y promociones en tiempo real sin necesidad de reimprimir menús físicos. Tus cambios se reflejan inmediatamente.',
        color: 'text-[#406D96]',
      },
      {
        icon: 'Palette',
        title: 'Personaliza tu marca',
        description:
          'Adapta colores, tipografía e imágenes para que tu menú digital refleje perfectamente la identidad visual de tu negocio.',
        color: 'text-[#406D96]',
      },
    ],
  },
  howItWorks: [
    {
      step: '1. Regístrate',
      description:
        'Crea tu cuenta gratuita como restaurante. Configura tu perfil, añade tu logo y prepárate para digitalizar tu menú.',
    },
    {
      step: '2. Crea tu menú',
      description:
        'Añade platos, categorías, precios e imágenes. Personaliza el diseño para que refleje tu marca y estilo.',
    },
    {
      step: '3. Comparte y vende',
      description:
        'Genera tu código QR o enlace directo. Tus clientes podrán ver tu menú actualizado desde cualquier lugar.',
    },
  ],
  features: [
    {
      icon: 'Smartphone',
      title: '100% Responsive',
      description:
        'Diseñado para verse perfecto en cualquier dispositivo: móviles, tablets y computadoras.',
      color: 'from-blue-50',
      shadow: 'rgba(59,130,246,0.15)',
    },
    {
      icon: 'Zap',
      title: 'Actualización Instantánea',
      description:
        'Modifica precios, platos y promociones en tiempo real sin necesidad de reimprimir menús.',
      color: 'from-green-50',
      shadow: 'rgba(16,185,129,0.15)',
    },
    {
      icon: 'Palette',
      title: 'Personalizable',
      description:
        'Adapta colores, tipografía e imágenes para que coincida con la identidad de tu marca.',
      color: 'from-purple-50',
      shadow: 'rgba(139,92,246,0.15)',
    },
    {
      icon: 'Search',
      title: 'Búsqueda Inteligente',
      description:
        'Tus clientes pueden encontrar fácilmente sus platos favoritos con nuestra búsqueda avanzada.',
      color: 'from-yellow-50',
      shadow: 'rgba(253,224,71,0.15)',
    },
    {
      icon: 'BarChart2',
      title: 'Análisis Detallados',
      description:
        'Conoce qué platos son los más vistos y populares entre tus clientes.',
      color: 'from-red-50',
      shadow: 'rgba(239,68,68,0.15)',
    },
    {
      icon: 'Languages',
      title: 'Multiidioma',
      description:
        'Ofrece tu menú en múltiples idiomas para atender a clientes internacionales.',
      color: 'from-indigo-50',
      shadow: 'rgba(99,102,241,0.15)',
    },
  ],
  pricing: [
    {
      name: 'Básico',
      price: 19,
      color: 'bg-white',
      textColor: 'text-blue-600',
      features: [
        'Hasta 50 productos',
        '1 Menú digital',
        'Actualizaciones ilimitadas',
      ],
      button: {
        label: 'Comenzar',
        color: 'bg-blue-600 hover:bg-blue-700 text-white',
      },
    },
    {
      name: 'Pro',
      price: 49,
      color: 'bg-gradient-to-br from-blue-600 to-blue-700',
      textColor: 'text-white',
      badge: {
        label: 'Popular',
        color: 'bg-yellow-400 text-blue-900',
      },
      features: [
        'Productos ilimitados',
        '5 Menús digitales',
        'Análisis avanzados',
        'Soporte prioritario',
      ],
      button: {
        label: 'Comenzar',
        color: 'bg-yellow-400 hover:bg-yellow-300 text-blue-900',
      },
    },
    {
      name: 'Enterprise',
      price: 99,
      color: 'bg-white',
      textColor: 'text-blue-600',
      features: [
        'Todo de Pro',
        'Menús ilimitados',
        'API personalizada',
        'Soporte 24/7',
      ],
      button: {
        label: 'Contactar',
        color: 'bg-blue-600 hover:bg-blue-700 text-white',
      },
    },
  ],
  contact: {
    title: '¿Listo para comenzar?',
    description:
      'Únete a cientos de restaurantes que ya están usando DailyMenu',
    cta: {
      label: 'Crear mi menú gratis 🚀',
      href: '/register',
    },
  },
};
