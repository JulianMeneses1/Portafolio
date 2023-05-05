import { Component, OnInit} from '@angular/core';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { Proyectos } from 'src/app/interfaces/mosk-proyecto';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  faSquarePen = faSquarePen; 
  proyectos : Proyecto[] = Proyectos



  constructor() 
  {}

  ngOnInit ():void {   
   
  }

  
}
