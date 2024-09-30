import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { TestComponent } from './components/test/test.component';
import { EmpleadoService } from './services/empleado.service'; // Asegúrate de importar tu servicio

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [EmpleadoService], // Registra tu servicio aquí
  bootstrap: [AppComponent]
})
export class AppModule { }
