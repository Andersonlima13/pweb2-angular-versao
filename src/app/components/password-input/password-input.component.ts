import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  imports: [FormsModule],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css'
})
export class PasswordInputComponent {
  @Input() placeholder: string = 'Enter your password';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  showPassword: boolean = false;

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
