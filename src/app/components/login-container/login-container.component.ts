import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';


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