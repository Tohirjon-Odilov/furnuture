import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';

import { MattressesComponent } from './components/mattresses/mattresses.component';
import {AngularYandexMapsModule, YaConfig} from "angular8-yandex-maps";
import { SwiperComponentComponent } from './components/swiper-component/swiper-component.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {NzCarouselComponent, NzCarouselContentDirective} from "ng-zorro-antd/carousel";

const config: YaConfig = {
  apikey: 'daab0c1b-92f1-4749-a3e4-54c920ec0471',
};

@NgModule({
  declarations: [
    HomeComponent,
    ContactsComponent,
    MattressesComponent,
    SwiperComponentComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularYandexMapsModule,
    CarouselModule,
    NzCarouselComponent,
    NzCarouselContentDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Swiper Web Components uchun qo'shildi
})
export class HomeModule { }
