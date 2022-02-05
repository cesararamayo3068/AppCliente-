import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor() {}

  getClientes(): Observable<Cliente[]> {
    //convertimos nuestro listado de clientes en un Observable
    return of(CLIENTES);
  }
}
