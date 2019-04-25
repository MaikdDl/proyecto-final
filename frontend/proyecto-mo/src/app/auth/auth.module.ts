import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AccesoComponent } from './containers/acceso/acceso.component';
import { RexistroComponent } from './containers/rexistro/rexistro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './store/auth.state';

@NgModule({
  declarations: [AccesoComponent, RexistroComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NgxsModule.forFeature([AuthState])
  ],
  exports: [AccesoComponent, RexistroComponent]
})
export class AuthModule { }
