import { Component } from '@angular/core';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
declare var $: any;  


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],  
})

export class HeaderComponent {  
  faBars = faBars;
  faX = faX  
  scrollVisible:boolean=true

  

  constructor() {     } 
      
  cerrarMenuRetardo () {
    if(window.innerHeight>=600) {
      setTimeout(this.cerrarMenu,400)
      } else { setTimeout(this.cerrarMenu, 800)
    } 
  }

  cerrarMenu () {
    $("#menuColapsado").modal('hide')
  }  
  
}

