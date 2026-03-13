import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailInputComponent } from '../email-input/email-input.component';
import { PasswordInputComponent } from '../password-input/password-input.component';

@Component({
  selector: 'app-input-container',
  imports: [CommonModule, EmailInputComponent, PasswordInputComponent],
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.css'
})
export class InputContainerComponent {
  email: string = '';
  password: string = '';

  onEmailChange(value: string): void {
    this.email = value;
    console.log('Email changed:', this.email);
  }

  onPasswordChange(value: string): void {
    this.password = value;
    console.log('Password changed:', this.password);
  }
}
