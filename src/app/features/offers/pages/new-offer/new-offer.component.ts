import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Offer } from '../../models/offer.model';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.scss'],
})
export class NewOfferComponent {
  offerForm!: FormGroup;
  offerData!: Offer;

  constructor(
    private formBuilder: FormBuilder,
    private offerService: OfferService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.generateReactiveForm();
  }

  generateReactiveForm(): void {
    this.offerForm = this.formBuilder.group({
      id: [''],
      title: ['', [Validators.required, Validators.maxLength(60)]],
      description: [''],
      points: ['', [Validators.max(100)]],
      businessId: [''],
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  addOffer() {
    if (this.offerForm.status !== 'VALID') {
      this.openSnackBar('Formulario Invalido', 'Aceptar');
    } else {
      const offer: Offer = {
        id: this.offerForm.get('id')!.value,
        title: this.offerForm.get('title')!.value,
        description: this.offerForm.get('description')!.value,
        points: this.offerForm.get('points')!.value,
        businessId: this.offerForm.get('businessId')!.value,
      };
      this.offerService.addOffer(offer).subscribe((response: any) => {
        console.log(response);
      });
      this.cancelAdd();
    }
  }

  onSubmit() {
    this.addOffer();
  }

  cancelAdd() {
    this.router.navigate(['/business/offers']);
  }
}
