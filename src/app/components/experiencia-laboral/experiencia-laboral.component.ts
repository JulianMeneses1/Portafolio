import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { faSquarePen, faPlus, faX } from '@fortawesome/free-solid-svg-icons';

import { Subscription } from 'rxjs';
import { Experiencia } from 'src/app/interfaces/experiencia-laboral';
import { Router } from '@angular/router';
import { Experiencias } from 'src/app/interfaces/mosk-experiencia-laboral';


@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  posicion_Y:string="0px";  
  experiencias: Experiencia[] = Experiencias;
  experienciaSeleccionada:Experiencia = Experiencias [0];
  mostrarPrimerExp:boolean = true;


  constructor(private ruta: Router)
      
  { }

  ngOnInit ():void {
  

  } 

  desaparecerPrimerExp(){    
    this.mostrarPrimerExp=false  
  }  
  
  alternarExperiencias (experiencia: Experiencia): void {
    this.experienciaSeleccionada = experiencia; 
    this.posicion_Y=experiencia.posicion_Y; 
    this.ruta.navigate(['/experiencia'], {queryParams: 
      {idExp:experiencia.id}})

  }

 

}









  
 

  
  
