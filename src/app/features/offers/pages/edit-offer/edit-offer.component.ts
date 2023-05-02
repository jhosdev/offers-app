import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Offer } from '../../models/offer.model';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.scss']
})
export class EditOfferComponent implements OnInit {
  offer$!: Observable<Offer>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: OfferService
  ) {}


  ngOnInit() {
    this.offer$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getOffer(+params.get('id')!))
    );
  }

  //TODO: Actualizar el objeto y agregar campos faltantes

  gotoOffers(offer: Offer) {
    const offerId = offer ? offer.id : null;
    // Pass along the offer id if available
    // so that the OfferList component can select that offer.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/offers', { id: offerId, foo: 'foo' }]);
  }
}
