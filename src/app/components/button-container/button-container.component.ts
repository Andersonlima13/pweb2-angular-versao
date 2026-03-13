import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

export interface ButtonConfig {
  text: string;
  backgroundColor: string;
  textColor: string;
  icon?: string;
  onClick: () => void;
}

@Component({
  selector: 'app-button-container',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './button-container.component.html',
  styleUrl: './button-container.component.css'
})
export class ButtonContainerComponent {
  @Input() direction: 'row' | 'column' = 'column';
  @Input() gap: number = 15;

  buttons: ButtonConfig[] = [
    {
      text: 'Sign up with Google',
      backgroundColor: '#4285F4',
      textColor: '#FFFFFF',
      icon: 'assets/google-icon.svg',
      onClick: () => this.signUpWithGoogle()
    },
    
    {
      text: 'Sign up with Microsoft',
      backgroundColor: '#0078D4',
      textColor: '#FFFFFF',
      icon: 'assets/microsoft-icon.svg',
      onClick: () => this.signUpWithMicrosoft()
    },
    {
      text: 'Create Account',
      backgroundColor: '#6C5CE7',
      textColor: '#FFFFFF',
      onClick: () => this.createAccount()
    }
  ];

  signUpWithGoogle(): void {
    console.log('Sign up with Google');
    // Implementar lógica de autenticação com Google
  }

  signUpWithMicrosoft(): void {
    console.log('Sign up with Microsoft');
    // Implementar lógica de autenticação com Microsoft
  }

  createAccount(): void {
    console.log('Create Account');
    // Implementar lógica de criação de conta
  }
}
