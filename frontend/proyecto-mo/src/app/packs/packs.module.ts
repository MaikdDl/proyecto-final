import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PacksRoutingModule } from "./packs-routing.module";
import { PacksComponent } from './component/packs/packs.component';
import { AuthModule } from '../auth/auth.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [PacksComponent],
  imports: [
    CommonModule,
    PacksRoutingModule,
    AuthModule,
    NgZorroAntdModule
  ]
})

export class PacksModule { }