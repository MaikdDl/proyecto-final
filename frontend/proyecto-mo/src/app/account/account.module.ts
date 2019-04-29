import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from "./component/account/account.component";



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NgZorroAntdModule,
  ]
})

export class AccountModule { }