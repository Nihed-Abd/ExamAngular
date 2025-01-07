import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from './equipe/equipe.module';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private apiUrl = 'assets/db.json';

  constructor(private http: HttpClient) { }

  getEquipes(): Observable<{ equipes: Equipe[] }> {
    return this.http.get<{ equipes: Equipe[] }>(this.apiUrl);
  }
}