import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './component/inicio/inicio.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule,
    AuthModule,
    NgZorroAntdModule
  ],
  exports: [InicioComponent]
})
export class InicioModule { }
