import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from './component/about/about.component';
import { SharedModule } from '../shared/shared.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, SharedModule, NgZorroAntdModule],
  declarations: [AboutComponent]
})

export class AboutModule { }