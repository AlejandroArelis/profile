import { Tip } from "../interfaces/tip.interface";

export const TIPS: Tip[] = [
  {
    title: 'Sé Específico con tu Categoría:',
    description: 'Agrega siempre el departamento al que te refieres para evitar respuestas generales.',
    wrong: {
      description1: '¿Cuál es el proceso?',
      description2: '¿Cómo se hace una solicitud?'
    },
    correct: {
      description1: '¿Cuál es el proceso de Ventas para nuevos clientes?',
      description2: '¿Cuál es el procedimiento para solicitar material de oficina en la categoría de Administración?'
    }
  }, {
    title: 'Usa Preguntas Completas:',
    description: 'Formula preguntas claras, incluyendo detalles importantes, para obtener respuestas más precisas.',
    wrong: {
      description1: '¿Auditorías?',
      description2: '¿Horarios?'
    },
    correct: {
      description1: '¿Qué documentación se necesita para las auditorías internas?',
      description2: 'Cuáles son los horarios de atención al cliente durante los fines de semana?'
    }
  }, {
    title: 'Evita Abreviaciones Confusas:',
    description: 'Emplea nombres completos para que tu solicitud sea entendida rápidamente.',
    wrong: {
      description1: 'Formulario para RH.',
      description2: 'Horario para JD.'
    },
    correct: {
      description1: '¿Cuál es el formulario de vacaciones en Recursos Humanos?',
      description2: '¿Cuál es el horario para el departamento Jurídico?'
    }
  }, {
    title: 'Proporciona Contexto:',
    description: 'Agrega siempre el departamento al que te refieres para evitar respuestas generales.',
    wrong: {
      description1: 'Falta de herramientas.',
      description2: 'Falta personal.'
    },
    correct: {
      description1: '¿Qué hago si me faltan herramientas en una instalación?',
      description2: '¿Qué medidas puedo tomar si me falta personal en el turno de noche en Atención al Cliente?"'
    }
  }, {
    title: 'Habla Claro y Simple:',
    description: 'Evita tecnicismos o jergas que puedan complicar la comprensión. Usa oraciones completas y directas.',
    wrong: {
      description1: 'Acceder manual.',
      description2: 'Organización proyectos.'
    },
    correct: {
      description1: '¿Cómo puedo acceder al manual de procedimientos de Recursos Humanos?',
      description2: '¿Cuál es la mejor forma de organizar los proyectos en el gestor de archivos para evitar confusiones?'
    }
  }, {
    title: 'Si No Entiendo a la Primera...',
    description: 'No te preocupes, intenta nuevamente proporcionando más información.',
    wrong: {
      description1: 'Tu respuesta no me ayudó.',
      description2: 'No obtengo la información correcta.'
    },
    correct: {
      description1: 'Megan, no entendí bien cómo solicitar el formulario de evaluación, ¿puedes darme más detalles?',
      description2: 'Megan, ¿puedes explicarme mejor el proceso de revisión de presupuestos?'
    }
  }, {
    title: 'Reformulación:',
    description: 'Si no obtienes la respuesta correcta, reformula tu pregunta con palabras diferentes.',
    wrong: {
      description1: '¿Cómo obtengo la política de gastos?',
      description2: ''
    },
    correct: {
      description1: 'Megan, ¿dónde puedo encontrar las directrices de gastos para empleados?',
      description2: ''
    }
  }, {
    title: 'Estructura Tu Pregunta:',
    description: 'Divide una pregunta compleja en varias preguntas más sencillas para obtener respuestas más precisas.',
    wrong: {
      description1: '¿Cuáles son las políticas y regulaciones que debo seguir?',
      description2: ''
    },
    correct: {
      description1: 'Primero, ¿puedes indicarme dónde encontrar las políticas internas?',
      description2: ''
    }
  }
]