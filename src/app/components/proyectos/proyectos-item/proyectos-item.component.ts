import { Component, Input, OnInit } from '@angular/core';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Proyectos } from 'src/app/data/mosk-proyecto';


@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent  implements OnInit{
  faSquarePen = faSquarePen;
  faArrow = faArrowUpRightFromSquare 

  @Input() proyecto: Proyecto = Proyectos[0]

  constructor() 
  { }

  ngOnInit () {

  }

}






  






