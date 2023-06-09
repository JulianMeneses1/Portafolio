import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercademiComponent } from './components/acercademi/acercademi.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { FormacionAcademicaComponent } from './components/formacion-academica/formacion-academica.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollMenuDirective } from './directives/menu-scroll.directive';
import { ScrollConocimientosDirective } from './directives/conocimientos-scroll.directive.ts';
import { ConocimientosItemComponent } from './components/conocimientos/conocimientos-item/conocimientos-item.component';
import { ExperienciaLaboralItemComponent } from './components/experiencia-laboral/experiencia-laboral-item/experiencia-laboral-item.component';
import { ProyectosItemComponent } from './components/proyectos/proyectos-item/proyectos-item.component';
import { FormacionAcademicaItemComponent } from './components/formacion-academica/formacion-academica-item/formacion-academica-item.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercademiComponent,
    ConocimientosComponent,
    ProyectosComponent,
    ExperienciaLaboralComponent,
    FormacionAcademicaComponent,
    ContactoComponent,
    FooterComponent,
    ScrollMenuDirective,
    ConocimientosItemComponent,
    ScrollConocimientosDirective,
    ExperienciaLaboralItemComponent,
    ProyectosItemComponent,
    FormacionAcademicaItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
