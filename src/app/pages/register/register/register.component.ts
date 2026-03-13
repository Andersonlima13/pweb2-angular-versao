import { Component } from '@angular/core';
import { LoginContainerComponent } from '../../../components/login-container/login-container.component';

@Component({
  selector: 'app-register',
  imports: [LoginContainerComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
}
