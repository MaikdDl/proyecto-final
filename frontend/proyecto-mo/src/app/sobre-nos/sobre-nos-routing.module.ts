import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreNosComponent } from './component/sobre-nos/sobre-nos.component';
import { SiteLayoutComponent } from '../shared/components/site-layout/site-layout.component';


const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'sobre-nos',
        component: SobreNosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class SobreNosRoutingModule { }
