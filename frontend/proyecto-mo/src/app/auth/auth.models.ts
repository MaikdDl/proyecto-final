import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export interface Auth {
  uuid: string;
  email: string;
  expiresIn: number;
  accessToken: string;
  location: string;
  name: string;
  firstSurname: string;
  secondSurname: string;
  nif: number;
  address: string;
  zipCode: number;
  country: string;
  phoneNumber: string;
  birthday: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  uuid: string;
  email: string;
  accessToken: string;
  expiresIn: number;
}

export interface RegisterRequest {
  nombre: string;
  apellido1: string;
  apellido2: string;
  email: string;
  password: string;
}

