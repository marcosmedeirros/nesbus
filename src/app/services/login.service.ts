import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../types/login-reponse.type';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCliente: HttpClient) { }

  login(email: string, password: string) {
    return this.httpCliente.post<LoginResponse>("/login", {email, password}).pipe(
      tap((value) =>{ sessionStorage.setItem("auth-token", value.token)
      })
    )
  }
}
