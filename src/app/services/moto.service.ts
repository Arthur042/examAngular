import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Moto } from '../models/moto';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  GetAll(): Observable<Moto[]> {
    return this.http.get<Moto[]>(this.apiUrl);
  }

  getByType(type: string): Observable<Moto[]> {
    return this.http.get<Moto[]>(this.apiUrl + '.json?type=' + type);
  }

  getByMarque(marque: string): Observable<Moto[]> {
    return this.http.get<Moto[]>(this.apiUrl + '.json?marque=' + marque);
  }

  getById(id: number): Observable<Moto> {
    return this.http.get<Moto>(this.apiUrl + '/' + id);
  }

}