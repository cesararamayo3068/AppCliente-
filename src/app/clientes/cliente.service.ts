import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, map ,catchError,throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private urlEndpoint: string = 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient , private router:Router) { }

  getClientes(): Observable<Cliente[]> {
    //convertimos nuestro listado de clientes en un Observable

    return this.http.get(this.urlEndpoint).pipe(
      map(response=>response as Cliente[])
    );
  }

  create(cliente: Cliente): Observable<any> {
    //en el metodo create pasamos la url ("'http://localhost:8080/api/clientes")
    // como segundo parametro pasamos el cliente 
    // y como 3er parametro el httpHeaders
    return this.http.post<any>(this.urlEndpoint, cliente, { headers: this.httpHeaders }).pipe(
    catchError(e=>{
      console.error(e.error.mensaje);
      swal.fire(e.error.mensaje,e.error.error,'error');
      return throwError(e);
    })
    );
  }

  getCliente(id):Observable<Cliente>{
    //implementamos el metodo del tipo get y le pasamos la url con el id
    return this.http.get<Cliente>(`${this.urlEndpoint}/${id}`).pipe(
        catchError(error=>{
          this.router.navigate(['/clientes']);
          console.log(error.error.mensaje);
          swal.fire('Error al editar',error.error.mensaje,'error');
          return throwError(error);
        })
    );
  }

  update(cliente:Cliente):Observable<any>{
    return this.http.put<any>(`${this.urlEndpoint}/${cliente.id}`,cliente ,{ headers: this.httpHeaders }).pipe(
      catchError(e=>{
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e);
      })
    );
  }

  delete(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndpoint}/${id}`,{ headers: this.httpHeaders }).pipe(
      catchError(e=>{
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e);
      })
    );
  }
}
