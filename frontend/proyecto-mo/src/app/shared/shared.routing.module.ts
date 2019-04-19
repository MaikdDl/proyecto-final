import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from '../inicio/component/inicio/inicio.component';
import { SobreNosComponent } from '../sobre-nos/component/sobre-nos/sobre-nos.component';
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
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
