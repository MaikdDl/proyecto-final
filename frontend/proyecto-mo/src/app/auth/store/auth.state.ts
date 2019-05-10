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
  GetUserProfile,
  UpdateUserProfile,
  UpdateUserProfileSuccess,
  UpdateUserProfileFailed,
  MakeOrder,
  MakeOrderSuccess,
  MakeOrderFailed,
  ShowUserOrders,
  ShowUserOrdersSuccess,
  ShowUserOrdersFailed
} from './auth.actions';
import { Auth, Profile, Order, UserOrders } from '../auth.models';
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
    { patchState }: StateContext<Auth>,
    { profile }: GetUserProfileSuccess
  ) {
    patchState({ ...profile });
  }

  @Action(UpdateUserProfile, { cancelUncompleted: true })
  updateUserProfile(
    { dispatch }: StateContext<Auth>,
    { profile }: UpdateUserProfile
  ) {
    return this.authService.updateUserProfile(profile).pipe(
      tap(() => dispatch(new UpdateUserProfileSuccess(profile))),
      catchError(error => dispatch(new UpdateUserProfileFailed(error.error)))
    );
  }

  @Action(UpdateUserProfileSuccess)
  updateUserProfileSuccess(
    { patchState, dispatch }: StateContext<Profile>,
    { profile }: UpdateUserProfileSuccess
  ) {
    patchState({ ...profile }
    );
    dispatch(new Navigate(['/orderSuccess']));
  }

  @Action(MakeOrder)
  makeOrder(
    { dispatch }: StateContext<Order>,
    { order }: MakeOrder
  ) {
    return this.authService.makeOrder(order).pipe(
      tap(() => dispatch(new MakeOrderSuccess(order))),
      catchError(error => dispatch(new MakeOrderFailed(error.error)))
    );
  }

  @Action(MakeOrderSuccess)
  makeOrderSuccess(
    { patchState }: StateContext<Order>,
    { order }: MakeOrderSuccess
  ) {
    patchState({ ...order }
    );
  }

  @Action(ShowUserOrders)
  showUserOrders({ dispatch }: StateContext<Auth>, ) {
    return this.authService.showUserOrders().pipe(
      tap(userOrdersResponse => dispatch(new ShowUserOrdersSuccess(userOrdersResponse))),
      catchError(error => dispatch(new ShowUserOrdersFailed(error.error)))
    );

  }

  @Action(ShowUserOrdersSuccess)
  showUserOrdersSuccess(
    { patchState }: StateContext<Auth>,
    { userOrders }: ShowUserOrdersSuccess
  ) {
    patchState({ ...userOrders });
  }


  @Action([LoginFailed, RegisterFailed, GetUserProfileFailed, UpdateUserProfileFailed, ShowUserOrdersFailed])
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
    dispatch(new Navigate(['/start']));
  }
}