import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../environments/environments';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Participante } from '../interfaces/models/Participante';
import { ParticipanteDto } from '../interfaces/dto/ParticipanteDto';


@Injectable({
  providedIn: 'root'
})



export class AuthService {
  private http   = inject(HttpClient);
  private router = inject(Router);

  private apiUrl = `${environment.urlBase}/participantes`;

  // Signal para guardar o participante logado (reativo)
  currentUser = signal<Participante | null>(null);

  // POST /api/participante/login   // temporario criar participante
  login(dto: ParticipanteDto): Observable<Participante> {
    return this.http.post<Participante>(`${this.apiUrl}`, dto).pipe(
      tap(participante => {
        // Salva o participante no estado e no localStorage
        this.currentUser.set(participante);
        localStorage.setItem('participante', JSON.stringify(participante));
      })
    );
  }



  // POST /api/participantes (quando implementar no back) // para registrar um novo participante
  registrar(dto: ParticipanteDto): Observable<Participante> {
    return this.http.post<Participante>(`${this.apiUrl}`, dto);
  }

  // POST /api/participante/logout
  logout(): void {
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe({
      complete: () => this.limparSessao()
    });
  }

  // Recupera sessão ao recarregar a página
  restaurarSessao(): void {
    const salvo = localStorage.getItem('participante');
    if (salvo) {
      this.currentUser.set(JSON.parse(salvo));
    }
  }

  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }

  private limparSessao(): void {
    this.currentUser.set(null);
    localStorage.removeItem('participante');
    this.router.navigate(['/login']);
  }
}