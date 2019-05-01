import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { SiteLayoutComponent } from '../shared/components/site-layout/site-layout.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'orderSuccess',
        component: OrderSuccessComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OrderSuccessRoutingModule { }