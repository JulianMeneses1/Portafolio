import { Experiencia } from "./experiencia-laboral"

export const Experiencias: Experiencia []  = [ // Hacemos que la variable Experiencias sea un array de interfaces Task, es decir que cada objeto tiene que cumplir con la estructura definida en la interfaz

    {
        id: 1,
        puesto: "App Developer (Power Platform)",
        nombre_empresa: "Procom IT Solutions",
        url: "https://procomitsolutions.com/es",
        fecha_inicio: "Septiembre 2022",
        fecha_fin: "Actualidad",
        descripcion: `Me desempeño como desarrollador de apps para escritorio y móviles a través de las herramientas Power Apps y Power Automate de Power Platform, perteneciente a Microsoft.
        Trabajo en un equipo interdisciplinario con la metodología Scrum, teniendo reuniones diarias y sprints cada dos o tres semanas.`,
        posicion_Y: "exp-bar-Y--0"
            
    },    
    {
        id: 2,
        puesto: "Secretario",
        nombre_empresa: "ByV Asociados",
        url: "https://www.google.com.ar",
        fecha_inicio: "Septiembre 2017",
        fecha_fin: "Diciembre 2017",
        descripcion: "Llevaba a cabo la tarea de llamar a clientes morosos para hacer un plan de financiación de sus deudas.",
        posicion_Y: "exp-bar-Y--45"     
             
    }
]