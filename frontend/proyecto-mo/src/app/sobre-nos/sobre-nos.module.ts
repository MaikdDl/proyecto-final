import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SobreNosRoutingModule } from "./sobre-nos-routing.module";
import { SobreNosComponent } from './component/sobre-nos/sobre-nos.component';
import { SharedModule } from '../shared/shared.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [CommonModule, SobreNosRoutingModule, SharedModule, NgZorroAntdModule],
  declarations: [SobreNosComponent]
})

export class SobreNosModule { }