import { Component, inject } from '@angular/core';
import { LoginContainerComponent } from '../../components/login-container/login-container.component';
import { ButtonContainerComponent } from '../../components/button-container/button-container.component';
import { ButtonComponent } from '../../components/button/button.component';
import { InputContainerComponent } from '../../components/input-container/input-container.component';
import { InputComponent } from '../../components/form-controls/input/input.component';
import { PasswordInputComponent } from '../../components/form-controls/password-input/password-input.component';
import { ReactiveFormsModule, FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LoginContainerComponent, ButtonContainerComponent, ButtonComponent, InputContainerComponent, InputComponent,
    PasswordInputComponent, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private fb          = inject(FormBuilder);
  private authService = inject(AuthService);
  private router      = inject(Router);
  erro = '';

  loginForm = this.fb.group({
    nome:  ['', Validators.required],
    senha: ['', Validators.required],
  });

  registrar(): void {
    if (this.loginForm.invalid) return;
    const { nome, senha } = this.loginForm.value;
    this.authService.registrar({ nome: nome!, senha: senha! }).subscribe({
      next: ()     => this.router.navigate(['/login']),
      error: (err) => this.erro = 'Erro ao registrar. Tente novamente.',
      complete: () => console.log('Registro concluído com sucesso!')
    });
   
  }



  signUpWithGoogle(): void {
    console.log('Sign up with Google');
  }

  signUpWithMicrosoft(): void {
    console.log('Sign up with Microsoft');
  }
}