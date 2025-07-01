import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ContactsComponent} from "./components/contacts/contacts.component";
import {MattressesComponent} from "./components/mattresses/mattresses.component";
import {MattressDetailComponent} from "./components/mattress-detail/mattress-detail.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },

  {
    path: 'mattresses',
    component: MattressesComponent,
  },
  {
    path: 'mattresses/:id',
    component: MattressDetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
