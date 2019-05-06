import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from "./component/purchase/purchase.component";
import { AuthModule } from '../../auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../services/jwt.interceptor';



@NgModule({
  declarations: [PurchaseComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    AuthModule,
    NgZorroAntdModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
})

export class PurchaseModule { }