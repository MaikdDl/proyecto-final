import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { SiteLayoutComponent } from '../../../shared/components/site-layout/site-layout.component';
import { CompraComponent } from './component/compra/compra.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'compra',
        component: CompraComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }