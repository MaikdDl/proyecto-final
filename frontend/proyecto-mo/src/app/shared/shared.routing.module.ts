import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from './layout/component/layout/layout.component';
import { InicioComponent } from '../inicio/component/inicio/inicio.component';
import { SobreNosComponent } from '../sobre-nos/component/sobre-nos/sobre-nos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      }
      ,
      {
        path: 'sobre-nos',
        component: SobreNosComponent
      }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule { }
