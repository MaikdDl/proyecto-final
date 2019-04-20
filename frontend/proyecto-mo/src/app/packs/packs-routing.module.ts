import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacksComponent } from './component/packs/packs.component';
import { SiteLayoutComponent } from '../shared/components/site-layout/site-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'packs',
        component: PacksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PacksRoutingModule { }
