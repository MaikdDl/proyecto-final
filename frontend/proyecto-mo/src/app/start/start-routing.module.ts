import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from "./component/start/start.component";
import { SiteLayoutComponent } from '../shared/components/site-layout/site-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'start',
        component: StartComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
