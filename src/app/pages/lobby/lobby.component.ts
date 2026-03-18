import { Component } from '@angular/core';
import { RaceContainerComponent } from '../../components/race-container/race-container.component';
import { RaceComponentComponent } from '../../components/race-component/race-component.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-lobby',
  imports: [RaceContainerComponent,RaceComponentComponent,NavbarComponent],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.css'
})
export class LobbyComponent {

}
