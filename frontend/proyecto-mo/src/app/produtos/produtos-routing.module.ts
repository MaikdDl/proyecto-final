import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from "../shared/components/site-layout/site-layout.component";
import { ProdutosComponent } from "./component/produtos/produtos.component";

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'produtos',
        component: ProdutosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
