import { LoginRequest, LoginResponse, RegisterRequest } from '../auth.models';

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public login: LoginRequest) {
  }
}

export class LoginSuccess {
  static readonly type = '[Auth] LoginSuccess';
  constructor(public loginResponse: LoginResponse) {
    console.log("Paso por el LoginSuccess");
  }
}

export class LoginFailed {
  static type = '[Auth] LoginFailed';
  constructor(public errors: Error[]) { }
}

export class Register {
  static readonly type = '[Auth] Register';
  constructor(public register: RegisterRequest) {
  }
}

export class RegisterSuccess {
  static readonly type = '[Auth] RegisterSuccess';
}

export class RegisterFailed {
  static type = '[Auth] RegisterFailed';
  constructor(public errors: Error[]) { }
}