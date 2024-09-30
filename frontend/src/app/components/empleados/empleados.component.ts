import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from "../../services/empleado.service";
import { NgForm } from '@angular/forms';
import { Empleado } from '../../models/empleado';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

declare var M: any;

@Component({
  selector: 'app-empleados',
  standalone: true,
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  imports: [CommonModule, FormsModule],
  providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {
  constructor(public empleadoService: EmpleadoService) {}

  ngOnInit(): void {}

  async agregarEmpleado(form?: NgForm) {
    try {
      await this.empleadoService.postEmpleado(form?.value);
      this.resetForm(form);
      M.toast({ html: 'Guardado satisfactoriamente' });
    } catch (error) {
      console.error('Error al agregar empleado:', error);
      M.toast({ html: 'Error al guardar' });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }
}
