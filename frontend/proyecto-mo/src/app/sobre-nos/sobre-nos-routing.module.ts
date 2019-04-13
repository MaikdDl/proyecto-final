import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreNosComponent } from './component/sobre-nos/sobre-nos.component';
import { LayoutComponent } from '../shared/layout/component/layout/layout.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class SobreNosRoutingModule { }
