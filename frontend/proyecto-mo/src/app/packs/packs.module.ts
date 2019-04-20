import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PacksRoutingModule } from "./packs-routing.module";
import { PacksComponent } from './component/packs/packs.component';

@NgModule({
  declarations: [PacksComponent],
  imports: [
    CommonModule,
    PacksRoutingModule
  ]
})

export class PacksModule { }