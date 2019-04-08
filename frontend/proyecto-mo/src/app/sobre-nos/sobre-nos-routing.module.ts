import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreNosComponent } from './component/sobre-nos/sobre-nos.component';

const routes: Routes = [
  {
    path: 'sobre-nos',
    component: SobreNosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class SobreNosRoutingModule { }
