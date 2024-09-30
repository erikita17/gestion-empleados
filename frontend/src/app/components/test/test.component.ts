import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'] // Debe ser styleUrls, no styleUrl
})
export class TestComponent {
  message: string = "¡Componente de prueba funcionando!";
}
