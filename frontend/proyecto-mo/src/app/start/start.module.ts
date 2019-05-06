import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './component/start/start.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    SharedModule,
    AuthModule,
    NgZorroAntdModule
  ],
  exports: [StartComponent]
})
export class StartModule { }
