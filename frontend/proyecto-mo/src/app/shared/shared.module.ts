import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedRoutingModule } from './shared.routing.module';
import { NgZorroAntdModule } from "ng-zorro-antd";
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { SiteLayoutHeaderComponent } from './components/site-layout-header/site-layout-header.component';
import { SiteLayoutContentComponent } from "./components/site-layout-content/site-layout-content.component";
import { SiteLayoutFooterComponent } from './components/site-layout-footer/site-layout-footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { CardComponent } from './components/card/card.component';
import { NgxsModule } from '@ngxs/store';
import { CardsState } from './components/card/store/card.state';

@NgModule({
  declarations: [
    SiteLayoutComponent,
    SiteLayoutHeaderComponent,
    SiteLayoutContentComponent,
    SiteLayoutFooterComponent,
    CardComponent
  ],
  imports: [CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    AuthModule,
    NgZorroAntdModule,
    NgxsModule.forFeature([CardsState])],
  exports: [
    SiteLayoutComponent,
    SiteLayoutFooterComponent,
    SiteLayoutContentComponent,
    SiteLayoutHeaderComponent,
    CardComponent
  ],
})
export class SharedModule { }
