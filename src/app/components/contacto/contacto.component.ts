import { Component, OnInit } from '@angular/core';
import { faUser, faEnvelope, faFileLines, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
declare var $: any;


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  
  faUser = faUser;
  faEnvelop = faEnvelope;
  faFileLines = faFileLines;
  faCircleCheck = faCircleCheck;  
  formularioContacto!: FormGroup;
  formularioInvalido: boolean = false;

  constructor( private formBuilder: FormBuilder,
              private servicioEmail : EmailService) 
  {  }

  ngOnInit ():void {    

    this.formularioContacto = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      asunto: ['',[Validators.required]],
      correo: ['',[Validators.required, Validators.email]],
      mensaje: ['',[Validators.required]]

    })  
  }

  onSubmit ():void {
    if(this.formularioContacto.invalid) {
    this.formularioInvalido=true      
    } else {
    let datos = {
      asunto: this.formularioContacto.get('asunto')?.value,
      mensaje: `Nombre: ${this.formularioContacto.get('nombre')?.value}
      \nMensaje: ${this.formularioContacto.get('mensaje')?.value}
      \nCorreo: ${this.formularioContacto.get('correo')?.value}`
    }
    this.servicioEmail.enviarEmail(datos).subscribe();
    $("#contacto-modal-confirmacion").modal('show');  
    this.formularioContacto.reset()
    }
  }  
  

  ocultarMensajeError () {
   
      this.formularioInvalido=false
    }     

}
