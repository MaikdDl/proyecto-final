import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './inicio/inicio.module';
import { SobreNosModule } from './sobre-nos/sobre-nos.module';
import { ProdutosModule } from './produtos/produtos.module';
import { PacksModule } from './packs/packs.module';
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsRouterPluginModule } from "@ngxs/router-plugin";
import { SharedModule } from "./shared/shared.module";
import { environment } from 'src/environments/environment';
import { AccountModule } from './account/account.module';
import { CompraModule } from './auth/containers/compra/compra.module';

registerLocaleData(es);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
      // developmentMode: false
    }),
    AppRoutingModule,
    InicioModule,
    SobreNosModule,
    ProdutosModule,
    PacksModule,
    SharedModule,
    AccountModule,
    CompraModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
