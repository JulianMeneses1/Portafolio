import { Experiencia } from "../interfaces/experiencia-laboral"

export const Experiencias: Experiencia []  = [ // Hacemos que la variable Experiencias sea un array de interfaces Task, es decir que cada objeto tiene que cumplir con la estructura definida en la interfaz

    {
        id: 1,
        puesto: "Power Platform Developer",
        nombre_empresa: "Wemox",
        url: "https://www.cedi.com.ar/",
        fecha_inicio: "Agosto 2023",
        fecha_fin: "Actualidad",
        descripcion: `Desarrollo de soluciones de software con las herramientas de Dynamics 365 
        y Power Platform, incluyendo Power Apps, Power Automate y Dataverse, entre otras. 
        Se emplea la metodología Scrum en la organización de los equipos de trabajo.`,
        posicion_Y: "exp-bar-Y--0"            
    },    
    {
        id: 2,
        puesto: "Power Platform Developer",
        nombre_empresa: "Procom IT Solutions",
        url: "https://procomitsolutions.com/es",
        fecha_inicio: "Septiembre 2022",
        fecha_fin: "Agosto 2023",
        descripcion: `Desarrollo de apps y automatización de procesos empresariales 
        mediante las herramientas Power Apps, Power Automate, 
        Sharepoint y Dataverse, pertenecientes a Power Platform.`,
        posicion_Y: "exp-bar-Y--45"              
    }
]