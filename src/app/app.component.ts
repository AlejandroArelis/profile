import { Component } from '@angular/core';
import { ItemListConfiguration } from './components/item-list/item-list.component';

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
}
