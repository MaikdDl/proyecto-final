import { State, Action, StateContext, Store } from '@ngxs/store';
import { AuthService } from '../services/auth.service';
import {
  Login,
  LoginSuccess,
  LoginFailed,
  RegisterSuccess,
  RegisterFailed,
  Register,
  UpdateUrl,
  Logout,
  GetUserProfileSuccess,
  GetUserProfileFailed,
  GetUserProfile
} from './auth.actions';
import { Auth } from '../auth.models';
import { tap, catchError } from "rxjs/operators";
import { Navigate } from '@ngxs/router-plugin';

@State<Auth>({
  name: 'auth',
  defaults: {
    ...JSON.parse(localStorage.getItem('auth'))
  }
})

export class AuthState {
  constructor(private store: Store, private authService: AuthService) { }

  @Action(Login, { cancelUncompleted: true })
  login({ dispatch }: StateContext<Auth>, action: Login) {
    return this.authService.login(action.login).pipe(
      tap(data => dispatch(new LoginSuccess(data))),
      catchError(error => dispatch(new LoginFailed(error.error)))
    );
  }

  @Action(LoginSuccess)
  loginSuccess(
    { patchState }: StateContext<Auth>,
    { loginResponse }: LoginSuccess
  ) {
    patchState({ ...loginResponse });
  }

  @Action(Register)
  register({ dispatch }: StateContext<Auth>, action: Register) {
    return this.authService.register(action.register).pipe(
      tap(() => dispatch(new RegisterSuccess())),
      catchError(error => dispatch(new RegisterFailed(error.error)))
    );
  }

  @Action(RegisterSuccess)
  registerSuccess(ctx: StateContext<Auth>) {
  }

  @Action(GetUserProfile)
  getUserProfile({ dispatch }: StateContext<Auth>, ) {
    return this.authService.getUserProfile().pipe(
      tap(profileResponse => dispatch(new GetUserProfileSuccess(profileResponse))),
      catchError(error => dispatch(new GetUserProfileFailed(error.error)))
    );
  }

  @Action(GetUserProfileSuccess)
  getUserProfileSuccess(
    { setState }: StateContext<Auth>,
    { profile }: GetUserProfileSuccess
  ) {
    setState({ ...profile });
  }

  @Action([LoginFailed, RegisterFailed, GetUserProfileFailed])
  error(ctx: StateContext<Auth>, { errors }: any) {
  }

  @Action(UpdateUrl)
  updateUrl({ patchState }: StateContext<Auth>, { url }) {
    patchState({ location: url })
  }

  @Action(Logout)
  logout({ setState, dispatch }: StateContext<Auth>) {
    this.authService.logout();
    setState(null);
    dispatch(new Navigate(['/inicio']));
  }
}