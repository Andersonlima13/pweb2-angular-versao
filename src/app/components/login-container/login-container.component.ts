import { Component, inject, input, Input } from '@angular/core';
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
  @Input() title: string = '';
}