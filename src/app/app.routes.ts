import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastrar/cadastrar.component';

export const routes: Routes = [

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cadastrar",
    component: CadastroComponent
  }

];
