import { Proyecto } from "../interfaces/proyecto"

export const Proyectos : Proyecto [] = [ 

    {
        id:1,
        nombre:"Aplicación Ecommerce",        
        imagen: "../assets/test.png",
        descripcion: `Un sitio web ecommerce para comprar productos informáticos. Incluye login con JWT, roles (user y admin) con diferentes privilegios, 
                      carrito de compra, posibilidad de editar los productos cargados en la base de datos y pago con la API de Paypal.`,
        url_github: "https://github.com/JulianMeneses1/App-Ecommerce/tree/main",
        url_sitio_web: "http://informatik.s3-website-us-east-1.amazonaws.com/",
        tecnologias: ["React", "Sping Boot", "MySQL", "Redux", "AWS"],
            
    },
    {
        id:2,
        nombre:"Aplicación Portafolio",        
        imagen: "../assets/Aplicacion Portafolio.png",
        descripcion: `Versión alternativa de este portafolio con posibilidad de edición online de las diferentes secciones a través de la conexión a una 
                      API REST, que incluye sistema de login mediante autenticación JWT, 
                      contraseña encriptada, CRUD para los items de las diferentes secciones y diagramas UML.`,
        url_github: "https://github.com/JulianMeneses1/Portfolio-FrontEnd",
        url_github2: "https://github.com/JulianMeneses1/Portfolio-BackEnd",
        url_sitio_web: "https://portafolio-frontend-julian.web.app/",
        tecnologias: ["Angular", "Spring Boot", "Hibernate", "MySQL"],            
    },
    {
        id:3,
        nombre:"Aplicación Gestión de Personas",        
        imagen: "../assets/App Personas.png",
        descripcion: `Un sitio web para gestionar personas, donde además de poder visualizarlas en una tabla con paginación y filtros, y en un gráfico
        de cantidad de personas por países, generado con chart.js, se puede eliminar, modificar o agregar personas. `,
        url_github: "https://github.com/JulianMeneses1/App-Personas",
        url_sitio_web: "https://app-personas-c02fb.web.app/",
        tecnologias: ["Angular", "Spring Boot", "Hibernate", "MySQL"],
  
    },
    {
        id:4,
        nombre:"Base de Datos Universidad",        
        imagen: "../assets/Base de datos.png",
        descripcion: `Una base de datos relacional para una universidad ficticia que incluye relaciones 1-N y N-N, 
                      así como diversos reportes como búsqueda de alumnos a cargo de cada profesor.`,
        url_github: "https://github.com/JulianMeneses1/Proyecto-Base-de-Datos-PIL",
        tecnologias: ["Python", "SQLAlchemy", "MySQL"],
  
    },
   
   
]