import {Component, Input} from '@angular/core';
import {LoginLayoutComponent} from "../../components/login-layout/login-layout.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputLoginComponent} from "../../components/input-login/input-login.component";
import {Router} from "@angular/router";
import { LoginService } from '../../services/login.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginLayoutComponent,
    ReactiveFormsModule,
    InputLoginComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastrService: ToastrService
  ) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {this.toastrService.success("Logado com sucesso!")},
      error: () => {this.toastrService.error("Erro ao logar, Tente novamente!")}
    })
  }

  navigate() {
    this.router.navigate(["/cadastrar"]);
  }




}
