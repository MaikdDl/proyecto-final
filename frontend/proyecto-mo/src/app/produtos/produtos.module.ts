import { NgModule } from "@angular/core";
import { ProdutosComponent } from "./component/produtos/produtos.component";
import { CommonModule } from "@angular/common";
import { ProdutosRoutingModule } from "./produtos-routing.module";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProdutosComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SharedModule
  ]
})

export class ProdutosModule { }