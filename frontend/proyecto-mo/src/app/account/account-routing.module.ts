import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { SiteLayoutComponent } from '../shared/components/site-layout/site-layout.component';
import { AccountComponent } from './component/account/account.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }