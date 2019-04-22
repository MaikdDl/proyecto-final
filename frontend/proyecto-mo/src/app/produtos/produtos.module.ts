import { NgModule } from "@angular/core";
import { ProdutosComponent } from "./component/produtos/produtos.component";
import { CommonModule } from "@angular/common";
import { ProdutosRoutingModule } from "./produtos-routing.module";

@NgModule({
  declarations: [ProdutosComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})

export class ProdutosModule { }