import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';

import { MattressesComponent } from './components/mattresses/mattresses.component';
import {AngularYandexMapsModule, YaConfig} from "angular8-yandex-maps";

const config: YaConfig = {
  apikey: 'daab0c1b-92f1-4749-a3e4-54c920ec0471',
};

@NgModule({
  declarations: [
    HomeComponent,
    ContactsComponent,
    MattressesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularYandexMapsModule,
  ]
})
export class HomeModule { }
