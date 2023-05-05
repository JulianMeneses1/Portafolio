import { Component, OnInit } from '@angular/core';
import { Conocimiento } from 'src/app/interfaces/conocimiento';
import { Conocimientos } from 'src/app/interfaces/mosk-conocimientos';


@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit{

  conocimientos: Conocimiento[] = Conocimientos

  constructor() 
  {  }

   ngOnInit ():void {

  }   

 
}
