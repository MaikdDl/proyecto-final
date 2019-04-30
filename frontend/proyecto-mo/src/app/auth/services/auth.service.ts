import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginResponse, Auth } from '../auth.models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }
  login({ email, password }) {
    return this.http.post<LoginResponse>(`${environment.apiBaseUrl}/account/login`, {
      email,
      password
    })
      .pipe(
        map(user => {
          if (user && user.accessToken) {
            const { accessToken } = user;
            console.log('Token: ', accessToken)
            localStorage.setItem(
              'auth',
              JSON.stringify({ accessToken })
            );
          }
          return user;
        })
      );
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

  getUserProfile(): Observable<Auth> {
    return this.http.get<Auth>(`${environment.apiBaseUrl}/user`);
  }

  logout() {
    console.log(localStorage.getItem('auth'));
    localStorage.removeItem('auth');
  }
}