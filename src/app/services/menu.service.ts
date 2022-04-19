import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Menu[]> {
    //Tengo que tipificarlo aca porque me va a devolver un array de interfaces de menus
    return this.http.get<Menu[]>('/assets/data/menu.json');
  }



}
