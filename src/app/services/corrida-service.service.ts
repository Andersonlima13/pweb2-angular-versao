import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Corrida } from '../interfaces/models/Corrida';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorridaServiceService {

  private http   = inject(HttpClient);
  private router = inject(Router);

    private apiUrl = `${environment.urlBase}/corridas`;


    

    getCorridas(): Observable<Corrida[]> {
        return this.http.get<Corrida[]>(`${this.apiUrl}`);
      }
  



}
