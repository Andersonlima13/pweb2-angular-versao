import { Component } from '@angular/core';
import { LoginContainerComponent } from '../../components/login-container/login-container.component';
import { ButtonContainerComponent } from '../../components/button-container/button-container.component';
import { ButtonComponent } from '../../components/button/button.component';
import { InputContainerComponent } from '../../components/input-container/input-container.component';
import { InputComponent } from '../../components/form-controls/input/input.component';
import { PasswordInputComponent } from '../../components/form-controls/password-input/password-input.component';
import { ReactiveFormsModule, FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [LoginContainerComponent, ButtonContainerComponent,ButtonComponent,InputContainerComponent,InputComponent
    ,PasswordInputComponent, ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  loginForm = new FormGroup({
    email:    new FormControl(''),
    password: new FormControl(''),
  });
  
}
