export const contactData = {
  hero: {
    title: 'Contáctanos',
    description: 'Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.',
  },
  info: {
    title: 'Información de Contacto',
    description: 'También puedes encontrarnos a través de estos medios:',
    details: [
      {
        icon: 'Mail',
        title: 'Email',
        value: 'contacto@dailymenu.com',
        link: 'mailto:contacto@dailymenu.com',
        description: 'Escríbenos cualquier consulta',
      },
      {
        icon: 'Phone',
        title: 'Teléfono',
        value: '+51 999 999 999',
        link: 'tel:+51999999999',
        description: 'Llamadas de lunes a viernes',
      },
      {
        icon: 'MapPin',
        title: 'Ubicación',
        value: 'Arequipa, Perú',
        link: 'https://maps.google.com',
        description: 'Oficina principal',
      },
      {
        icon: 'Clock',
        title: 'Horario',
        value: 'Lun - Vie: 9AM - 6PM',
        link: null,
        description: 'Horario de atención',
      },
    ],
  },
  form: {
    title: 'Envíanos un Mensaje',
    description: 'Completa el formulario y nos pondremos en contacto contigo pronto.',
    fields: {
      name: {
        label: 'Nombre Completo',
        placeholder: 'Ingresa tu nombre completo',
        required: true,
      },
      email: {
        label: 'Email',
        placeholder: 'tu@email.com',
        required: true,
      },
      phone: {
        label: 'Teléfono',
        placeholder: '+51 999 999 999',
        required: false,
      },
      company: {
        label: 'Empresa (Opcional)',
        placeholder: 'Nombre de tu restaurante',
        required: false,
      },
      message: {
        label: 'Mensaje',
        placeholder: 'Cuéntanos en qué podemos ayudarte...',
        required: true,
      },
    },
    button: {
      text: 'Enviar Mensaje',
      loadingText: 'Enviando...',
    },
  },
  faq: {
    title: 'Preguntas Frecuentes',
    description: 'Encuentra respuestas rápidas a las consultas más comunes',
    questions: [
      {
        question: '¿Cuánto tiempo toma configurar mi menú?',
        answer: 'Puedes tener tu menú digital listo en menos de 30 minutos. Nuestro sistema es muy intuitivo y fácil de usar.',
      },
      {
        question: '¿Ofrecen soporte en español?',
        answer: 'Sí, todo nuestro soporte está disponible en español las 24 horas del día, los 7 días de la semana.',
      },
      {
        question: '¿Puedo cancelar mi suscripción en cualquier momento?',
        answer: 'Por supuesto. No hay contratos a largo plazo y puedes cancelar tu suscripción cuando gustes sin penalizaciones.',
      },
      {
        question: '¿Necesito conocimientos técnicos?',
        answer: 'No necesitas conocimientos técnicos. Nuestro sistema está diseñado para ser usado por cualquier persona.',
      },
    ],
  },
};
