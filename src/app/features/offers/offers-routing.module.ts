import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOffersComponent } from './pages/list-offers/list-offers.component';
import { NewOfferComponent } from './pages/new-offer/new-offer.component';
import { EditOfferComponent } from './pages/edit-offer/edit-offer.component';

const routes: Routes = [
  { path: 'offers', redirectTo: '/business/offers' },
  { path: 'business/offers',  component: ListOffersComponent },
  { path: 'offer/new',  redirectTo: '/admin/offers/new' },
  { path: 'admin/offers/new',  component: NewOfferComponent },
  { path: 'offer/:id', redirectTo: '/admin/offers/edit/:id' },
  { path: 'admin/offers/edit/:id',  component: EditOfferComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
