import { Component, inject } from '@angular/core';
import { RaceContainerComponent } from '../../components/race-container/race-container.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Corrida } from '../../interfaces/models/Corrida';
import { CorridaServiceService } from '../../services/corrida-service.service';

@Component({
  selector: 'app-lobby',
  imports: [RaceContainerComponent,NavbarComponent],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.css'
})
export class LobbyComponent {
  private corridaService = inject(CorridaServiceService);
  corridas: Corrida[] = [];

  ngOnInit() {
    this.corridaService.getCorridas().subscribe({
      next:  (data) => this.corridas = data,
      error: (err)  => console.error('Erro ao buscar corridas', err)
    });
  }
}