import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreNosComponent } from './component/sobre-nos/sobre-nos.component';
import { LayoutComponent } from '../shared/layout/component/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sobre-nos',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
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
