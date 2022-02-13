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

  public errores:string[];

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
    this.clienteService.create(this.cliente)
      // despues de suscribirnos en el Observable
      // nos muestra la respuesta y nos redirige al listado clientes
      .subscribe((cliente) => {
        this.router.navigate(['/clientes']);
        swal.fire('Cliente Guardado',`El cliente ${cliente.nombre} creado con exito!`,'success');
      },
      err =>{
        this.errores=err.error.errors as string[];
        console.log('codigo del error desde el backend ' + err.status);
        console.error(err.error.errors);

      }
      );
  }

  update():void{
    this.clienteService.update(this.cliente)
    .subscribe(
      respuesta=> {
        this.router.navigate(['/clientes'])
        swal.fire('Cliente Actualizado',`${respuesta.mensaje}: ${respuesta.cliente.nombre}`,'success');
      },
      err =>{
        this.errores=err.error.errors as string[];
        console.log('codigo del error desde el backend ' + err.status);
        console.error(err.error.errors);

      }
    )
  }
}
