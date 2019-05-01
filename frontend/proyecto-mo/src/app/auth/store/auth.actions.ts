import { LoginRequest, LoginResponse, RegisterRequest, Profile, Auth, Order } from '../auth.models';

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public login: LoginRequest) {
  }
}

export class LoginSuccess {
  static readonly type = '[Auth] LoginSuccess';
  constructor(public loginResponse: LoginResponse) {
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

export class UpdateUrl {
  static type = '[Auth] UpdateUrl';
  constructor(public url) { }
}

export class GetUserProfile {
  static readonly type = '[Auth] GetUserProfile';
}

export class GetUserProfileSuccess {
  static readonly type = '[Auth] GetUserProfileSuccess';
  constructor(public profile: Auth) { }
}

export class GetUserProfileFailed {
  static type = '[Auth] GetUserProfileFailed';
  constructor(public error: Error[]) { }
}

export class UpdateUserProfile {
  static readonly type = '[Auth] UpdateUserProfile';
  constructor(public profile: Profile) {
  }
}

export class UpdateUserProfileSuccess {
  static readonly type = '[Auth] UpdateUserProfileSuccess';
  constructor(public profile: Profile) { }
}

export class UpdateUserProfileFailed {
  static readonly type = '[Auth] UpdateUserProfileFailed';
  constructor(public errors: Error[]) { }
}

export class MakeOrder {
  static readonly type = '[Auth] MakeOrder';
  constructor(public order: Order) {
  }
}

export class MakeOrderSuccess {
  static readonly type = '[Auth] MakeOrderSuccess';
  constructor(public order: Order) {
  }
}
export class MakeOrderFailed {
  static readonly type = '[Auth] MakeOrderFailed';
  constructor(public errors: Error[]) { }
}

export class Logout {
  static type = '[Auth] Logout';
}