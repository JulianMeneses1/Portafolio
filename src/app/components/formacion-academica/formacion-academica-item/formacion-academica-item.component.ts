import { Component, OnInit, Input} from '@angular/core';
import { Formacion } from 'src/app/interfaces/formacion-academica';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { Formaciones } from 'src/app/data/mosk-formacion-academica';

@Component({
  selector: 'app-formacion-academica-item',
  templateUrl: './formacion-academica-item.component.html',
  styleUrls: ['./formacion-academica-item.component.css']
})
export class FormacionAcademicaItemComponent implements OnInit {  

  faSquarePen = faSquarePen;


  @Input() formacion: Formacion = Formaciones[0]

  constructor() { }

  ngOnInit () {
   
  }
}






