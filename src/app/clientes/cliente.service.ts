import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private urlEndpoint: string = 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    //convertimos nuestro listado de clientes en un Observable

    return this.http.get<Cliente[]>(this.urlEndpoint);
  }

  create(cliente: Cliente): Observable<Cliente> {
    //en el metodo create pasamos la url ("'http://localhost:8080/api/clientes")
    // como segundo parametro pasamos el cliente 
    // y como 3er parametro el httpHeaders
    return this.http.post<Cliente>(this.urlEndpoint, cliente, { headers: this.httpHeaders })
  }

  getCliente(id):Observable<Cliente>{
    //implementamos el metodo del tipo get y le pasamos la url con el id
    return this.http.get<Cliente>(`${this.urlEndpoint}/${id}`)
  }
}
