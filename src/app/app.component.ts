import { Component } from '@angular/core';
import { ItemListConfiguration } from './components/item-list/item-list.component';
import { JobConfiguration } from './components/jobs/jobs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  contactList:ItemListConfiguration[] = [{
    icon: {
      type:'material',
      value: "mail"
    },
    value: "alejandro.arelis@outlook.com",
    text: "alejandro.arelis@outlook.com",
    type: "mail"
  }, {
    icon: {
      type:'material',
      value: "call"
    },
    value: "+528713366792",
    text: "+52 (871) 336 6792",
    type: "tel"
  }, {
    icon: {
      type:'material',
      value: "home_pin"
    },
    text: "Torreón, Coahuila, México",
    type: "text"
  }];

  schoolList:ItemListConfiguration[] = [{
    icon: {
      type:'material',
      value: "school"
    },
    text: "Ingeniería en Sistemas Computacionales",
    type: "text"
  }, {
    icon: {
      type:'material',
      value: "pin_drop"
    },
    text: "Instituto Tecnológico de la Laguna",
    type: "text"
  }];

  programmingLanguagesList:ItemListConfiguration[] = [{
    icon: {
      type:'svg',
      value: "c4.svg"
    },
    text: "C#",
    type: "text",
    progress : {
      value: 80,
      color: "bg-primary"
    }
  }, {
    icon: {
      type:'svg',
      value: "javascript.svg"
    },
    text: "JavaScript",
    type: "text",
    progress : {
      value: 90,
      color: "bg-warning"
    }
  }, {
    icon: {
      type:'svg',
      value: "typescript.svg"
    },
    text: "TypeScript",
    type: "text",
    progress : {
      value: 90,
      color: "bg-primary"
    }
  }, {
    icon: {
      type:'svg',
      value: "python.svg"
    },
    text: "Python",
    type: "text",
    progress : {
      value: 70,
      color: "bg-warning"
    }
  }];

  designList:ItemListConfiguration[] = [{
    icon: {
      type:'svg',
      value: "angular-material.svg"
    },
    text: "Angular Material",
    type: "text",
    progress : {
      value: 95,
      color: "bg-orange"
    }
  }, {
    icon: {
      type:'svg',
      value: "bootstrap.svg"
    },
    text: "Bootstrap",
    type: "text",
    progress : {
      value: 100,
      color: "bg-indigo"
    }
  }, {
    icon: {
      type:'svg',
      value: "css.svg"
    },
    text: "CSS",
    type: "text",
    progress : {
      value: 85,
      color: "bg-info"
    }
  }, {
    icon: {
      type:'svg',
      value: "html.svg"
    },
    text: "HTML",
    type: "text",
    progress : {
      value: 100,
      color: "bg-danger"
    }
  }];

  frontendList:ItemListConfiguration[] = [{
    icon: {
      type:'svg',
      value: "angular.svg"
    },
    text: "Angular",
    type: "text",
    progress : {
      value: 100,
      color: "bg-danger"
    }
  }, {
    icon: {
      type:'svg',
      value: "redux.svg"
    },
    text: "Redux",
    type: "text",
    progress : {
      value: 80,
      color: "bg-purple"
    }
  }, {
    icon: {
      type:'svg',
      value: "rxjs.svg"
    },
    text: "RxJS",
    type: "text",
    progress : {
      value: 85,
      color: "bg-pink"
    }
  }];

  backendList:ItemListConfiguration[] = [{
    icon: {
      type:'svg',
      value: "aspnetcore.svg"
    },
    text: "ASP.Net Core",
    type: "text",
    progress : {
      value: 80,
      color: "bg-purple"
    }
  }, {
    icon: {
      type:'svg',
      value: "nodejs.svg"
    },
    text: "Node.js",
    type: "text",
    progress : {
      value: 90,
      color: "bg-success"
    }
  }, {
    icon: {
      type:'svg',
      value: "expressjs.svg"
    },
    text: "Express.js",
    type: "text",
    progress : {
      value: 90,
      color: "bg-dark"
    }
  }, {
    icon: {
      type:'svg',
      value: "mongoosejs.svg"
    },
    text: "Mongoose.js",
    type: "text",
    progress : {
      value: 100,
      color: "bg-danger"
    }
  }];

  otherList:ItemListConfiguration[] = [{
    icon: {
      type:'svg',
      value: "docker.svg"
    },
    text: "Docker",
    type: "text",
    progress : {
      value: 80,
      color: "bg-primary"
    }
  }, {
    icon: {
      type:'svg',
      value: "git.svg"
    },
    text: "Git",
    type: "text",
    progress : {
      value: 90,
      color: "bg-danger"
    }
  }];

  dbList:ItemListConfiguration[] = [{
    icon: {
      type:'svg',
      value: "mongodb.svg"
    },
    text: "MongoDB",
    type: "text",
    progress : {
      value: 100,
      color: "bg-success"
    }
  }, {
    icon: {
      type:'svg',
      value: "mysql.svg"
    },
    text: "MySql",
    type: "text",
    progress : {
      value: 90,
      color: "bg-primary"
    }
  }, {
    icon: {
      type:'svg',
      value: "sqlserver.svg"
    },
    text: "Sql Server",
    type: "text",
    progress : {
      value: 95,
      color: "bg-danger"
    }
  }];

  jobsList:JobConfiguration[] = [{
    title: "Desarrollador Full Stack",
    company: "Corus Consulting",
    location: "Delegación Benito Juárez de CDMX",
    dates: "de abril de 2022 a julio del 2023",
    proyects: [{
      title: "Portal operativo",
      description: "Parte del equipo responsable de construir los módulos de contabilidad y facturación."
    }, {
      title: "Prevención de fraudes",
      description: "Construí el proyecto base, componentes, sevicios, autentidicación, seguridad y manejo de errores."
    }]
  }, {
    title: "Desarrollador Full Stack",
    company: "Propulsoft",
    location: "Cuernavaca, Morelos",
    dates: "de agosto de 2021 a abril del 2022",
    proyects: [{
      title: "Plataforma de donaciones de la Cruz Roja Mexicana",
      description: "Se optimizó y actualizó la aplicación con las mejores prácticas, se dividió el proyecto por módulos y se creó un panel de control interactivo en el cual se pueden colocar gráficas o valores de forma dinámica"
    }, {
      title: "Plataforma para el Centro de Justicia para las Mujeres",
      description: "Se creó una plataforma intuitiva, agradable y responsiva en la cual se puede obtener datos en tiempo real, crear usuarios y mostrar reportes para diferentes tipos de roles y flujos."
    }, {
      title: "Aplicación Movil de encuestas para el Centro de Justicia para las Mujeres",
      description: "Diseñé y desarrollé una aplicación movil en la cual se pueden hacer encuestas y obtener feedback por el servicio proporcionado en el CJM."
    }]
  }, {
    title: "Desarrollador Front End",
    company: "Spinar+",
    location: "Guadalajara, Jaliscos",
    dates: "de agosto de 2020 a agosto del 2021",
    proyects: [{
      title: "Xponect",
      description: "Fui o líder del proyecto front end, tomé decisiones técnicas, ayudé a planificar el proyecto, supervisé el código y gracias a mi experiencia como desarrollador Full Stack tuve colaboraciones interdisciplinarias con el equipo de diseño y el equipo de back-end, en donde fui de ayuda en la creación de nuevos servicios y microservicios. Xponect fue una plataforma especializada en eventos y salones virtuales ideada por el comienzo COVID-19. La plataforma fue inmersiva gracias a la implementación de realidad aumentada e intuitiva gracias a su parecido a una red social."
    }]
  }, {
    title: "Desarrollador Full Stack",
    company: "IMTIC",
    location: "Torreón, Coahuila",
    dates: "de enero de 2019 a junio del 2020",
    proyects: [{
      title: "Widgets",
      description: "Desarrollé widgets personalizados para las aplicaciones creadas con Bizagi BPMS los cuales no existían en dicha herramienta o las existentes no cumplían con las necesidades específicas. "
    }, {
      title: "Actualización",
      description: "Parte de mi trabajo consistió en migrar y actualizar las aplicaciones hechas con jQuery y javascript vanilla a aplicaciones hechas con Angular para posteriormente agregar bootstrap y responsividad."
    }, {
      title: "Prototipo de sistema de pagos",
      description: "Se creó un prototipo de una aplicación para la contratación de grupos musicales locales y pagos en línea utilizando el servicio de Conekta."
    }, {
      title: "Mujer SOS",
      description: "Fui parte del desarrollo de la aplicación el cual es un \"botón\" de pánico con enlace directo al C4 de la Fiscalía General del Estado de Coahuila desarrollada en Xamarin para las plataformas Android y iOS"
    }]
  }, {
    title: "Practicante Full Stack",
    company: "Pilgrim's",
    location: "Gómez Palacio, Durango",
    dates: "de agosto de 2018 a diciembre del 2018",
    proyects: [{
      title: "Acarreo y enjaule",
      description: "Inicié la primera parte del proyecto para el control y seguimiento de viajes de pollo vivo, proporcionando una funcionalidad que permitía la visualización en dispositivos móviles."
    }]
  }];
}
