import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedRoutingModule } from './shared.routing.module';
import { NgZorroAntdModule } from "ng-zorro-antd";
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { SiteLayoutHeaderComponent } from './components/site-layout-header/site-layout-header.component';
import { SiteLayoutFooterComponent } from './components/site-layout-footer/site-layout-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SiteLayoutComponent,
    SiteLayoutHeaderComponent,
    SiteLayoutFooterComponent
  ],
  imports: [CommonModule,
    RouterModule,
    FontAwesomeModule,
    SharedRoutingModule,
    NgZorroAntdModule,],
  exports: [
    SiteLayoutComponent,
    SiteLayoutFooterComponent,
    SiteLayoutHeaderComponent
  ],
})
export class SharedModule { }
