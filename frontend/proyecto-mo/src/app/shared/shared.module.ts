import { NgModule } from '@angular/core';
import { LayoutComponent } from "../shared/layout/component/layout/layout.component";
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared.routing.module';
import { NgZorroAntdModule } from "ng-zorro-antd";
import { InicioModule } from '../inicio/inicio.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule,
    SharedRoutingModule,
    NgZorroAntdModule,
    InicioModule],
  exports: [LayoutComponent],
})
export class SharedModule { }
