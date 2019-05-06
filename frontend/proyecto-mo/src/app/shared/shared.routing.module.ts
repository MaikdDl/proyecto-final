import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { StartComponent } from '../start/component/start/start.component';
import { AboutComponent } from '../about/component/about/about.component';
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'start',
        component: StartComponent
      }
      ,
      {
        path: 'about',
        component: AboutComponent
      }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule { }
