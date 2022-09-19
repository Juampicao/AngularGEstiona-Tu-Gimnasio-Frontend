import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISuscriptor } from '../models/ISuscriptor';
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
export class SuscriptorService {

  apiUrl: string = environment.apiUrl
  
  constructor(private http : HttpClient) { }

  // agregarSuscriptor( suscriptor: ISuscriptor) : Observable<ISuscriptor> {
  
  //   const objetoCreado = this.http.post<ISuscriptor>(this.apiUrl, suscriptor)
  //   console.log(objetoCreado)
  // return objetoCreado
 
  // }

  // editSuscriptor(suscriptor: ISuscriptor, updatedSuscriptor: ISuscriptor): Observable<any> {
  //   return this.http.patch(`${this.apiUrl}/update/${suscriptor.id}`, updatedSuscriptor)
  // }


  // getSuscriptorById() {

   
  // }

  // getAllSuscritors(): Observable<ISuscriptor[]> {
  //   return this.http.get<ISuscriptor[]>(this.apiUrl)

  // }

  // deleteSuscriptor(id: number): Observable<any> {
  //    return  this.http.delete(`${this.apiUrl}/delete/${id}`)
  // }
  
  
  // JSON SERVER
  agregarSuscriptor( suscriptor: ISuscriptor) : Observable<ISuscriptor> {
  
    const objetoCreado = this.http.post<ISuscriptor>(this.apiUrl, suscriptor, httpOptions)
    console.log(objetoCreado)
  return objetoCreado
 
  }

  editSuscriptor(suscriptor: ISuscriptor, updatedSuscriptor: ISuscriptor): Observable<any> {
    return this.http.patch(`${this.apiUrl}/update/${suscriptor.id}`, updatedSuscriptor) 
  }


  getSuscriptorById() {
   
  }

  getAllSuscritors(): Observable<ISuscriptor[]> {
    return this.http.get<ISuscriptor[]>(this.apiUrl)
  }

  deleteSuscriptor(suscriptor: ISuscriptor): Observable<ISuscriptor> {
     return  this.http.delete<ISuscriptor>(this.apiUrl)
  }
}
