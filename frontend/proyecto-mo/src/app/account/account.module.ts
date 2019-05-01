import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from "./components/account/account.component";
import { AccountDataComponent } from "./components/account-data/account-data.component";
import { AuthModule } from '../auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../auth/services/jwt.interceptor';



@NgModule({
  declarations: [AccountComponent, AccountDataComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    AuthModule,
    NgZorroAntdModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
})

export class AccountModule { }