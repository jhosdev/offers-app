import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OffersTableComponent } from './components/offers-table/offers-table.component';

const routes: Routes = [
  { path: 'offers', redirectTo: '/business/offers' },
  { path: 'business/offers',  component: OffersTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
