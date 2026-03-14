import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ButtonConfig {
  text: string;
  backgroundColor: string;
  textColor: string;
  icon?: string;
  onClick: () => void;
}

@Component({
  selector: 'app-button-container',
  imports: [CommonModule],
  templateUrl: './button-container.component.html',
  styleUrl: './button-container.component.css'
})
export class ButtonContainerComponent {
  @Input() direction: 'row' | 'column' = 'column';
  @Input() gap: number = 15;


}
