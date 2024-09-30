import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  selectedEmpleado: Empleado;
  empleados: Empleado[] = [];
  readonly URL_API = 'http://localhost:3000/api/gestion-empleados';

  constructor() {
    this.selectedEmpleado = new Empleado();
  }

  // Método para manejar errores
  private async handleResponse(response: Response) {
    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzamos un error con el estado y el mensaje
      const errorText = await response.text();  // Esto captura cualquier respuesta de error en texto
      throw new Error(`Error ${response.status}: ${errorText}`);
    }
    return response.json();  // Parseamos la respuesta a JSON
  }

  // Obtener empleados
  async getEmpleados(): Promise<Empleado[]> {
    const response = await fetch(this.URL_API);
    return this.handleResponse(response);  // Manejo del error
  }

  // Agregar empleado
  async postEmpleado(empleado: Empleado): Promise<Empleado> {
    const response = await fetch(this.URL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(empleado),
    });
    return this.handleResponse(response);  // Manejo del error
  }

  // Actualizar empleado
  async putEmpleado(empleado: Empleado): Promise<Empleado> {
    const response = await fetch(`${this.URL_API}/${empleado._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(empleado),
    });
    return this.handleResponse(response);  // Manejo del error
  }

  // Eliminar empleado
  async deleteEmpleado(_id: string): Promise<void> {
    const response = await fetch(`${this.URL_API}/${_id}`, { method: 'DELETE' });
    await this.handleResponse(response);  // Manejo del error
  }
}
