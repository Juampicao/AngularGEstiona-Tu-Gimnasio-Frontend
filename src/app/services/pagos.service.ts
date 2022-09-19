import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPago, ISuscriptor } from '../models/ISuscriptor';
import { environment } from 'src/environments/environment';

// Json server
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


@Injectable({
  providedIn: 'root'
})
export class PagosService {

  apiUrl: string = environment.apiUrl
  
  constructor(private http : HttpClient) { }

    // JSON SERVER
  crearPago( pago: IPago) : Observable<ISuscriptor> {
  
    const objetoCreado = this.http.post<ISuscriptor>(this.apiUrl, pago, httpOptions)
    console.log(objetoCreado)
  return objetoCreado
 
  }

  editPago(pago: IPago, updatedPago: IPago): Observable<any> {
    return this.http.patch(`${this.apiUrl}/update/${pago.id}`, updatedPago) 
  }


  getPagoById() {
   
  }

  getAllPagos(): Observable<ISuscriptor[]> {
    return this.http.get<ISuscriptor[]>(this.apiUrl)
  }

  deletePago(suscriptor: ISuscriptor): Observable<ISuscriptor> {
     return  this.http.delete<ISuscriptor>(this.apiUrl)
  }
}
