import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PacksRoutingModule } from "./packs-routing.module";
import { PacksComponent } from './component/packs/packs.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [PacksComponent],
  imports: [
    CommonModule,
    PacksRoutingModule,
    AuthModule
  ]
})

export class PacksModule { }