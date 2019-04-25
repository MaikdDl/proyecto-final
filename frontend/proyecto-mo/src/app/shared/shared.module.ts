import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedRoutingModule } from './shared.routing.module';
import { NgZorroAntdModule } from "ng-zorro-antd";
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { SiteLayoutHeaderComponent } from './components/site-layout-header/site-layout-header.component';
import { SiteLayoutFooterComponent } from './components/site-layout-footer/site-layout-footer.component';
import { RouterModule } from '@angular/router';
import { SiteLayoutHeaderFormsComponent } from './components/site-layout-header/site-layout-header-forms/site-layout-header-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { ClickPreventDefaultDirective } from './directives/click-prevent-default-directive';
import { IfDirective } from './directives/if.directive';

@NgModule({
  declarations: [
    SiteLayoutComponent,
    SiteLayoutHeaderComponent,
    SiteLayoutFooterComponent,
    SiteLayoutHeaderFormsComponent,
    ClickPreventDefaultDirective,
    IfDirective,
  ],
  imports: [CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    AuthModule,
    NgZorroAntdModule,],
  exports: [
    SiteLayoutComponent,
    SiteLayoutFooterComponent,
    SiteLayoutHeaderComponent,
    SiteLayoutHeaderFormsComponent,
    ClickPreventDefaultDirective,
    IfDirective,
  ],
})
export class SharedModule { }
