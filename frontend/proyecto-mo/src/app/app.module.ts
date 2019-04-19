import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './inicio/inicio.module';
import { SobreNosModule } from './sobre-nos/sobre-nos.module';
import { ProductosModule } from './productos/productos.module';
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { SharedModule } from "./shared/shared.module";
import { SiteLayoutHeaderFormsComponent } from './shared/components/site-layout-header/site-layout-header-forms/site-layout-header-forms.component';

registerLocaleData(es);

@NgModule({
  declarations: [AppComponent, SiteLayoutHeaderFormsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InicioModule,
    SobreNosModule,
    ProductosModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
