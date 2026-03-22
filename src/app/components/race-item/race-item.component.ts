import { Component, Input, input } from '@angular/core';
import { Corrida } from '../../interfaces/models/Corrida';

@Component({
  selector: 'app-race-item',
  imports: [],
  templateUrl: './race-item.component.html',
  styleUrl: './race-item.component.css'
})
export class RaceItemComponent {
  @Input() corrida! : Corrida;

}
