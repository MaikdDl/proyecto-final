import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AccesoComponent } from './containers/acceso/acceso.component';
import { RexistroComponent } from './containers/rexistro/rexistro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './store/auth.state';
import { SharedModule } from '../shared/shared.module';
import { ClickPreventDefaultDirective } from './directive/click-prevent-default-directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JwtInterceptor } from './services/jwt.interceptor';
import { ProfileComponent } from './containers/profile/profile.component';
import { OrdersComponent } from './containers/orders/orders.component';

@NgModule({
  declarations: [
    AccesoComponent,
    RexistroComponent,
    ClickPreventDefaultDirective,
    ProfileComponent,
    OrdersComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NgxsModule.forFeature([AuthState]),
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  exports: [AccesoComponent, RexistroComponent, OrdersComponent, ProfileComponent]
})
export class AuthModule { }
