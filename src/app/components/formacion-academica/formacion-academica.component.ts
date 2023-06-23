import { Component, OnInit} from '@angular/core';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Formacion } from 'src/app/interfaces/formacion-academica';
import { Formaciones } from 'src/app/data/mosk-formacion-academica';


@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {

  faSquarePen = faSquarePen;
  suscripcionAlternarEdicion?:Subscription;
  formaciones: Formacion[] = Formaciones
  showAllItems: boolean = false;

  toggleShowAllItems ()  {
    this.showAllItems = !this.showAllItems;
    console.log(this.showAllItems)
  }

  

  constructor() 
  {   }

  ngOnInit ():void {
 
  }
 
  
}







  
 

  
  
