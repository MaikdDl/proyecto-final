import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../auth.models';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  login({ email, password }) {
    console.log("Hi, from the Login");
    return this.http.post<LoginResponse>(
      `${environment.apiBaseUrl}/account/login`, {
        email,
        password
      });
  }

  register({ email, password, nombre, apellido1, apellido2 }) {
    return this.http.post(`${environment.apiBaseUrl}/account`, {
      email,
      password,
      nombre,
      apellido1,
      apellido2
    })
  }
}