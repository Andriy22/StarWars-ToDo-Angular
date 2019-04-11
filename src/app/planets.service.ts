import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Planet} from './planet'
@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  url = 'https://swapi.co/api/planets/';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };



  constructor(private http: HttpClient) { }

  getPlanets(page : number): Observable<object[]> {
    return this.http.get<Planet[]>(this.url + page, this.httpOptions);
  }
}