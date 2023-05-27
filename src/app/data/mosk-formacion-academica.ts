import { Formacion } from "../interfaces/formacion-academica";


export const Formaciones : Formacion [] = [ // Hacemos que la variable FormacionAcademica sea un array de interfaces Task, es decir que cada objeto tiene que cumplir con la estructura definida en la interfaz

    {
        id:1,
        nombre:"Desarrollo Web y Aplicaciones Digitales",
        institucion: "Instituto Superior Politécnico Córdoba",
        fecha_inicio:"Marzo 2022",
        fecha_fin:"Actualidad",
        descripcion: `Tecnicatura de 2 años y medio de duración en donde aprendo los principales conceptos de desarrollo web Front End y Back End,
                      empleando las siguientes tecnologías: HTML, CSS, TypeScript, Python y MySQL, y como frameworks usamos Bootstrap, Angular y Django. Todos estos conocimientos los aplicamos 
                      en la elaboración grupal de un proyecto de sitio web aplicando la metodología Scrum`,
        url_institucion: "https://www.ispc.edu.ar/",
        imagen: "../assets/Logo ISPC.jpeg"       
       
    },    
    {
        id:2,
        nombre:"Desarrollo Web Full Stack", 
        institucion: "Argentina Programa",
        fecha_inicio:"Octubre 2022",
        fecha_fin:"Actualidad",
        descripcion:`Curso de 7 meses de duración en en donde aprendo los principales conceptos de desarrollo web Front End y Back End,
                    empleando las siguientes tecnologías: HTML, CSS, TypeScript, Java y MySQL, y como frameworks usamos Bootstrap, Angular y Sping Boot. Todos estos conocimientos los aplico 
                    en la elaboración de un Portfolio Web con una base de datos y un login.`,    
        url_certificado: "",
        url_institucion: "https://www.argentina.gob.ar/economia/conocimiento/argentina-programa",
        imagen: "../assets/Logo Argentina Programa.png"
    },
    {
        id:3,
        nombre:"Power Platform App Maker Associate", 
        institucion: "Microsoft",
        fecha_inicio:"Febrero 2023",
        fecha_fin:"Febrero 2023",
        descripcion:`Certificación expedida por Microsoft que valida mi capacidad para construir soluciones a procesos empresariales 
                     mediante el empleo de las herramientos Power Apps, Power Automate, Power BI y Dataverse, pertenecientes a Power Platform.`,    
        url_certificado: "https://www.credly.com/badges/1244201c-2d3f-4da8-9060-c67de89a4475/linked_in_profile",
        url_institucion: "https://learn.microsoft.com/en-us/certifications/",
        imagen: "../assets/Logo Microsoft.webp"
    },
    {
        id:4,
        nombre:"Base de Datos - Python", 
        institucion: "Instituto Superior Politécnico Córdoba",
        fecha_inicio:"Agosto 2022",
        fecha_fin:"Diciembre 2022",
        descripcion:`Curso de 4 meses y medio de duración en el que aprendí a utilizar python para manejar bases de datos tanto relacionales (MySQL y SQL Server) 
                     como no relacionales (MongoDB), mediante el ORM SQLAlchemy. Esto incluyó conceptos como transacciones, normalización de una base
                     de datos relacional, y realización de diagramas URL.`,    
        url_certificado: "https://drive.google.com/file/d/10vfbd4T20DkA1T1G7JtIXmovFomPmrqK/view",
        url_institucion: "https://www.ispc.edu.ar/",
        imagen: "../assets/Logo ISPC.jpeg"
    },
    {
        id:5,
        nombre:"Programming Essentials in Python", 
        institucion: "Instituto Superior Politécnico Córdoba",
        fecha_inicio:"Marzo 2022",
        fecha_fin:"Julio 2022",
        descripcion:`Curso de 4 meses de duración en el que aprendí los fundamentos de Python, 
                     con conceptos centrales como listas anidadas, diccionarios, etc.`,    
        url_certificado: "https://drive.google.com/file/d/17XXlqFKv3LFMbnAqPK9syZe6016Qly7O/view?usp=share_link",
        url_institucion: "https://www.ispc.edu.ar/",
        imagen: "../assets/Logo ISPC.jpeg"
    },
    
    {
        id:6,
        nombre:"Profesorado de Historia", 
        institucion: "Universidad Nacional de Córdoba",
        fecha_inicio:"Marzo 2018",
        fecha_fin:"Marzo 2023",
        descripcion:`Profesor de historia. Título otorgado por la Facultad de Filosofía y Humanidades - UNC. Promedio: 9.27`,    
        url_certificado: "",
        url_institucion: "https://www.unc.edu.ar/",
        imagen: "../assets/Logo UNC.jpg"
    }  
]