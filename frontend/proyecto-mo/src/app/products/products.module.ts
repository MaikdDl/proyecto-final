import { NgModule } from "@angular/core";
import { ProductsComponent } from "./component/products/products.component";
import { CommonModule } from "@angular/common";
import { ProductsRoutingModule } from "./products-routing.module";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})

export class ProductsModule { }