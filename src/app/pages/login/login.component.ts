import {Component, Input} from '@angular/core';
import {LoginLayoutComponent} from "../../components/login-layout/login-layout.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import NewCommandModule from "@angular/cli/src/commands/new/cli";
import {InputLoginComponent} from "../../components/input-login/input-login.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginLayoutComponent,
    ReactiveFormsModule,
    InputLoginComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private router: Router) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    console.log(this.loginForm.value);
  }

  navigate() {
    this.router.navigate(["/cadastrar"]);
  }


}
