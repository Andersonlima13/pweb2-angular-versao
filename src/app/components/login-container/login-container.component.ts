import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ButtonContainerComponent } from '../button-container/button-container.component';
import { ButtonComponent } from '../button/button.component';
import { InputContainerComponent } from '../input-container/input-container.component';
import { InputComponent } from '../form-controls/input/input.component';
import { PasswordInputComponent } from '../form-controls/password-input/password-input.component';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
   
  ],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.css'
})
export class LoginContainerComponent {


   signUpWithGoogle(): void {
    console.log('Sign up with Google');
  }

  signUpWithMicrosoft(): void {
    console.log('Sign up with Microsoft');
  }

  createAccount(): void {
    console.log('Create Account');
  }




  @Input() title: string = '';

  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }


  }
}