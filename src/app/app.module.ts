import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeModule } from './features/home/home.module';
import { LayoutModule } from './layout/layout.module';
import { ToastrModule } from 'ngx-toastr';
import { AuthModule } from './features/auth/auth.module';
import { ErrorPagesModule } from './features/error-pages/error-pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularYandexMapsModule, YaConfig} from "angular8-yandex-maps";

import {register} from 'swiper/element/bundle'

register();

// Tarjima loader'ini yaratish funksiyasi
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


const config: YaConfig = {
  apikey: '9320150c-7536-41cf-8be8-cf42f9bf45d6',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    HomeModule,
    AuthModule,
    LayoutModule,
    ErrorPagesModule,
    // AngularYandexMapsModule,
    AngularYandexMapsModule.forRoot(config),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true, // Toastr uchun yopish tugmasi
      progressBar: true, // Toastr uchun progress-bar
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
