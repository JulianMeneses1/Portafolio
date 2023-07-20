import { Experiencia } from "../interfaces/experiencia-laboral"

export const Experiencias: Experiencia []  = [ // Hacemos que la variable Experiencias sea un array de interfaces Task, es decir que cada objeto tiene que cumplir con la estructura definida en la interfaz

    {
        id: 1,
        puesto: "Power Platform Developer",
        nombre_empresa: "Procom IT Solutions",
        url: "https://procomitsolutions.com/es",
        fecha_inicio: "Septiembre 2022",
        fecha_fin: "Actualidad",
        descripcion: `Me desempeño como automatizador de procesos empresariales y como desarrollador de aplicaciones, estando a cargo 
        tanto de la funcionalidad como del diseño. Para ello uso las herramientas Power Apps, Power Automate, Dataverse, Sharepoint y Power BI de Power Platform, perteneciente a Microsoft.
        Trabajo en un equipo bajo un líder, con reuniones diarias.`,
        posicion_Y: "exp-bar-Y--0"
            
    },    
    {
        id: 2,
        puesto: "Secretario",
        nombre_empresa: "ByV Asociados",
        fecha_inicio: "Septiembre 2017",
        fecha_fin: "Diciembre 2017",
        descripcion: "Llevaba a cabo la tarea de contactar a clientes de diferentes empresas para refinanciar sus deudas.",
        posicion_Y: "exp-bar-Y--45"     
             
    }
]