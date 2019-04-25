export interface Auth {
  uuid: string;
  email: string;
  accessToken: string;
  expiresIn: number;
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