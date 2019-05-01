import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CompraRoutingModule } from './compra-routing.module';
import { CompraComponent } from "./component/compra/compra.component";
import { AuthModule } from '../../auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../services/jwt.interceptor';



@NgModule({
  declarations: [CompraComponent],
  imports: [
    CommonModule,
    CompraRoutingModule,
    AuthModule,
    NgZorroAntdModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
})

export class CompraModule { }