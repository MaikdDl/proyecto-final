import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { SiteLayoutComponent } from '../../../shared/components/site-layout/site-layout.component';
import { PurchaseComponent } from './component/purchase/purchase.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        // path: 'purchase/:idProduct/:productName',
        path: 'purchase',
        component: PurchaseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }