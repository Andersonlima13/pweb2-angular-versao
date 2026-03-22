import { Component, Input } from '@angular/core';
import { Corrida } from '../../interfaces/models/Corrida';
import { RaceItemComponent } from '../race-item/race-item.component';

@Component({
  selector: 'app-race-container',
  imports: [ RaceItemComponent],
  templateUrl: './race-container.component.html',
  styleUrl: './race-container.component.css'
})
export class RaceContainerComponent {
    @Input() corridas: Corrida[] = [];


}
