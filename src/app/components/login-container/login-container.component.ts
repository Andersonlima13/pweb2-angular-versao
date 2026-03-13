import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonContainerComponent } from '../button-container/button-container.component';
import { InputContainerComponent } from '../input-container/input-container.component';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-login-container',
  imports: [CommonModule, ButtonContainerComponent, InputContainerComponent, ButtonComponent],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.css'
})
export class LoginContainerComponent {
  @Input() title: string = 'Sign In';
}
