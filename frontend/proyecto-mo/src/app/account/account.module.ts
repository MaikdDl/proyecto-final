import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from "./components/account/account.component";
import { AccountDataComponent } from "./components/account-data/account-data.component";
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [AccountComponent, AccountDataComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    AuthModule,
    NgZorroAntdModule,
  ]
})

export class AccountModule { }