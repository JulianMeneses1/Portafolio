import { Proyecto } from "./proyecto"

export const Proyectos : Proyecto [] = [ 

    {
        id:1,
        nombre:"Aplicación Portafolio",        
        imagen: "../assets/Aplicacion Portafolio.png",
        descripcion: `Versión alternativa de este portafolio con posibilidad de edición online de las diferentes secciones a través de la conexión a una 
                      API REST, que incluye sistema de login mediante autenticación JWT, 
                      contraseña encriptada, CRUD para los items de las diferentes secciones y diagramas UML.`,
        url_github: "https://github.com/JulianMeneses1/Portfolio-FrontEnd",
        url_github2: "https://github.com/JulianMeneses1/Portfolio-BackEnd",
        url_sitio_web: "https://portafolio-frontend-julian.web.app/",
        tecnologias: ["Angular", "Spring Boot", "MySQL", "Hibernate", "JPA"],
            
    },
    {
        id:2,
        nombre:"Base de Datos Universidad",        
        imagen: "../assets/Base de datos.png",
        descripcion: `Una base de datos relacional para una universidad ficticia que incluye relaciones 1-N y N-N, 
                      así como diversos reportes como búsqueda de alumnos a cargo de cada profesor.`,
        url_github: "https://github.com/JulianMeneses1/Proyecto-Base-de-Datos-PIL",
        tecnologias: ["Python", "SQLAlchemy", "MySQL"],
  
    },
    {
        id:3,
        nombre:"Psico Finder",        
        imagen: "../assets/Psico Finder.png",
        descripcion: `Un proyecto colectivo de un sitio web en donde podés encontrar el profesional de la salud mental que mejor se ajuste a tus preferencias. 
                      En este proyecto estuve a cargo de la mayor parte del diseño así como de la validación de
                      los formularios de registro de usuarios y profesionales.`,
        url_github: "https://github.com/oliverio97/Proyecto-integrador---ISPC",
        url_sitio_web: "https://oliverio97.github.io/Proyecto-integrador---ISPC/Front%20End%20(Vista)/index.html",
        tecnologias: ["HTML", "CSS", "Bootstrap", "JavaScript"],
            
    },
   
]