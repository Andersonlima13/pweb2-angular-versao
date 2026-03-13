import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { InputComponent } from '../form-controls/input/input.component';
import { PasswordInputComponent } from '../form-controls/password-input/password-input.component';

@Component({
  selector: 'app-input-container',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    PasswordInputComponent
  ],
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.css'

})
export class InputContainerComponent {

  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }

}