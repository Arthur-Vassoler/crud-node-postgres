import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PorpertiesModel } from './properties/properties.model';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  properties: PorpertiesModel = new PorpertiesModel();

  constructor(private http: HttpClient) { }

  addProperties(propertie: PorpertiesModel): Observable<any>{
    return this.http.post('http://localhost:8888/properties', propertie);
  }

  updateProperties(propertie: number): Observable<any>{
    this.properties = new PorpertiesModel();
    
    return this.http.put('http://localhost:8888/properties/' + propertie, this.properties);
  }

  findProperties(): Observable<any> {
    return this.http.get('http://localhost:8888/properties');
  }
}
