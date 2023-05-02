import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersComponent } from './offers.component';
import { OffersTableComponent } from './components/offers-table/offers-table.component';
import { OffersFormComponent } from './components/offers-form/offers-form.component';
import { ListOffersComponent } from './pages/list-offers/list-offers.component';
import { NewOfferComponent } from './pages/new-offer/new-offer.component';
import { EditOfferComponent } from './pages/edit-offer/edit-offer.component';

import { OffersRoutingModule } from './offers-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OffersComponent,
    OffersTableComponent,
    OffersFormComponent,
    ListOffersComponent,
    NewOfferComponent,
    EditOfferComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ]
})
export class OffersModule { }
