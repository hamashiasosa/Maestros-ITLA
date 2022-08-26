import { Router } from "express";
import { performLogin, createUser } from "../controllers/credentials.controller.js";

const router = Router();

//POST
router.post("/auth/login", performLogin);
router.post("/auth/create", createUser);


//GET
router.get("/", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/about_us" , (req, res) =>{
  res.render("about");
});


router.get("/soft_teachers", (req, res) => {
  res.render("softeachers", {
    teachers: [
      {
        key: 1, title: "Kelyn Tejada Belliard", description: "Programacion I, Programacion III,", rate: "4/5"
      },

      {
        key: 2, title: "Luis Soto", description: "Programacion I, Programacion Web", rate: "5/5"

      },
      {
        key: 3, title: "Freidy Nuñez Perez", description: "Fund. Programacion, Programacion I, Intro. Desarrollo de Apps Moviles, Intro. Base de Datos", rate: "3/5"

      },
      {
        key: 4, title: "Jean Carlos Arnaud", description: "Intro. Elaboracion de Algoritmos, Programacion I", rate: "5/5"

      },
      {
        key: 5, title: "Willis Polanco", description: "Programacion III, Programacion Web, Electiva 2, Adm. de proyectos de Software, Proyecto TDS", rate: "5/5"

      },
      {
        key: 6, title: "Raydelto Hernández", description: "Estructura de Datos, Programacion Web", rate: "4/5"

      }, {
        key: 7, title: "Orison Soto", description: "Intro. Elaboracionde algormitos, Fund. de Programacion, Adm. de proyectos de Software, Proyecto TDS ", rate: "5/5"

      },

      {
        key: 8, title: "Marisol Alvarez", description: "Intro. Elaboracionde algormitos, Programacion Web, Fund. de Programacion, Inteligencia Artificial", rate: "4/5"

      },

      {
        key: 9, title: "Luis Bessewell Feliz", description: "Programacion II, Programacion Paralela", rate: "5/5"

      }
    ]
  });
});


router.get("/sec_teachers", (req, res) => {
  res.render("secteachers", {
    teachers: [
      
{key:1, title: "Willy Alfredo" , description: "Hacker Etico 1 y 2, Gestión de Riesgos Tecnológicos y Cibernéticos, Estándares de Seguridad, Desarrollo de Políticas y Procedimientos de Seguridad" , rate: "4/5"

    },

{key:2, title: "Virginia Mercedes" , description: "Introducción a la Ciberseguridad, Fund. de Enrutamiento, Introducción a la Gerencia de Proyecto" , rate: "4/5"

    },

{key:3, title: "Sucre Ramirez" , description: "Introducción a la Ciberseguridad, Sistemas Operativos" , rate: "3/5"

    },

{key:4, title: "Jorge Isaac Vandershorst" , description: "Sistemas Operativos, Informática Forense, Seguridad en Aplicaciones" , rate: "5/5"

    },

{key:5, title: "Juan Alexander Ramirez" , description: "Intro. a la Ciberseguridad, Sistemas Operativos III" , rate: "4/5"

    },

{key:6, title: "Joel Morrobel Ovalle" , description: "Aspectos Legales de la Seguridad Informática, Fundamentos de Seguridad" , rate: "4/5"

    }

    ]
  });
});

router.get("/mult_teachers" , (req, res) => {
  res.render("multeachers", {
    teachers: [
     { 
      key:1, title: "Yasmery Gomez Subero" , description: "Gráficos de Mapa de Bits, Introducción Comunicación Visual " , rate: "2/5"

    },

{key:2, title: "Walky Abreu Lara" , description: "Laboratorio de Animación 2D, Animación 2D " , rate: "3/5"

    },

{key:3, title: "Werner Olmos " , description: "Ilustración Digital, Gráficos Vectoriales " , rate: "4/5"

    },

{key:4, title: "Vladimir Columna Pimentel " , description: "Marketing / Estrategia Competitiva, Electiva Ciclo Profesional 2" , rate: "5/5"

    },

{key:5, title: "Valentín Sánchez" , description: "DHTML, CSS y JavaScript / Programación Web " , rate: "3/5"

    },

{key:6, title: "Santo Sebastián Figueroa" , description: "Estadística Básica", rate: "5/5"

    }

    ]

  });
});

router.get("/home", (req, res) => {
  res.render("home", {
    categories: [

      {
        key: 1, title: "Software Development", imagen: "/images/coding.jpg", description: "Explore Software Development teachers with the subjects they teach"
        , redirecting: "soft_teachers"
      },

      {
        key: 2, title: "Cybersecurity", imagen: "/images/hacker.jpg", description: "Explore Cybersecurity teachers with the subjects they teach", redirecting: "sec_teachers"
      },

      {
        key: 3, title: "Multimedia", imagen: "/images/multimedia.jpg", description: "Explore Multimedia teachers with the subjects they teach" , redirecting: "mult_teachers"

      }
    ]

  });
});



export default router;
