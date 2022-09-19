import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from '../models/IMenu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

   constructor(private http: HttpClient) { }
  
  getMenu(): Observable<IMenu[]> {
   return  this.http.get<IMenu[]>('../assets/data/menu.json');
  }

}
