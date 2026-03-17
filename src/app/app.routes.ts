import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LobbyComponent } from './pages/lobby/lobby.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  { 
    path :  'lobby',
    component : LobbyComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },

];
