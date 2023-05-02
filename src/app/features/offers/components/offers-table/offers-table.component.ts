import { Component, OnInit, ViewChild } from '@angular/core';
import { Offer } from '../../models/offer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-offers-table',
  templateUrl: './offers-table.component.html',
  styleUrls: ['./offers-table.component.scss']
})
export class OffersTableComponent implements OnInit {
  offerData: Offer;
  data: Offer[] = [];
  displayedColumns: string[] = ['id', 'title', 'description', 'points', 'businessId', 'actions'];

  dataSource = new MatTableDataSource<Offer>(this.data);
  clickedRows = new Set<Offer>();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  isEditMode = false;

  constructor(private offerService: OfferService) {
    this.offerData = {} as Offer;
  };

  ngOnInit(): void {
    this.getOffers();
    this.dataSource.paginator = this.paginator;
  };

  getOffers(): void {
    this.offerService
      .getOffers()
      .subscribe((response) => {
        console.log(response)
        this.dataSource.data = response;
      })
  }

  delete(id: number): void {
    this.offerService
      .deleteOffer(id)
      .subscribe(() => {
        this.dataSource.data = this.dataSource.data.filter((o) => {
          return o.id !== id ? o : false;
        });
      });
  }
}
