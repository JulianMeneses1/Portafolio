import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experiencia } from 'src/app/interfaces/experiencia-laboral';
import { Experiencias } from 'src/app/data/mosk-experiencia-laboral';


@Component({
  selector: 'app-experiencia-laboral-item',
  templateUrl: './experiencia-laboral-item.component.html',
  styleUrls: ['./experiencia-laboral-item.component.css']
})
export class ExperienciaLaboralItemComponent {

  experiencia:Experiencia = Experiencias[0];

  constructor(private ruta: ActivatedRoute) { } 

  ngOnInit () { 
      
      this.ruta.queryParams.subscribe(params=>{
                 
          this.experiencia = Experiencias[params['idExp']-1]
      })
   
  }
  
}







