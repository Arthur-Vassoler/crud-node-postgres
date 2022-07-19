import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PorpertiesModel } from './properties/properties.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  properties: PorpertiesModel = new PorpertiesModel();
  
  constructor(private http: HttpClient) { }

  deleteProperties(propertie: number) {
    return this.http.delete('http://localhost:8888/properties/' + propertie);
  }

  findProperties(): Observable<any> {
    return this.http.get('http://localhost:8888/properties');
  }
}
