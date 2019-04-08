import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SobreNosRoutingModule } from "./sobre-nos-routing.module";
import { SobreNosComponent } from './component/sobre-nos/sobre-nos.component';

@NgModule({
  imports: [CommonModule, SobreNosRoutingModule],
  declarations: [SobreNosComponent]
})

export class SobreNosModule { }