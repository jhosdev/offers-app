import { Component } from '@angular/core';
import { OfferService } from 'src/app/features/offers/services/offer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private offerService: OfferService) {}
  totalOffers!: number;

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(): void {
    this.offerService.getOffers().subscribe((response) => {
      this.totalOffers = response.length;
    });
  }
}
