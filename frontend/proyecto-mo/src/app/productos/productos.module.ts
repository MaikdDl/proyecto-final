import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductosRoutingModule } from "./productos-routing.module";
import { ProductosComponent } from './component/productos/productos.component';

@NgModule({
  declarations: [ProductosComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})

export class ProductosModule { }