import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bienvenido a Angular';
  curso: string = 'Curso de Angular con Spring Boot';
  profesor: string = 'Andres Guzman';
}
