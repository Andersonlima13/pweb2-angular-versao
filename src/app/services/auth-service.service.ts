import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})



export class AuthServiceService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/participante`;


  




}
