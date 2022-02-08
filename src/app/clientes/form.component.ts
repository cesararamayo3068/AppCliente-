import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear Cliente';

  //inyectamos por constructor la clase ClienteService
  // inyectamos router del tipo Router para manejar las rutas
  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
   this.cargarCliente()
  }

  cargarCliente(): void {
    this.activedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.clienteService
          .getCliente(id)
          .subscribe((cliente) => (this.cliente = cliente));
      }
    });
  }

  public create(): void {
    this.clienteService
      .create(this.cliente)
      // despues de suscribirnos en el Observable
      // nos muestra la respuesta y nos redirige al listado clientes
      .subscribe((cliente) => {
        this.router.navigate(['/clientes']);
        swal.fire(
          'Cliente Guardado',
          `Cliente ${cliente.nombre} creado con exito`,
          'success'
        );
      });
  }
}
