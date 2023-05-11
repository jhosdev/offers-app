import { Injectable } from '@angular/core';
import { Offer } from '../models/offer.model';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private baseURL: string = environment.baseURL; //URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //TODO: add authorization with users
      //Authorization: 'my-auth-token'
    })
  };

  //TODO: Add Error Handler in services
  handleError(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.log(`An error ocurred ${error.status}, body was: ${error.error}`)
    }
    else {
      console.log(`Backend returned cod ${error.status}, body was: ${error.error}`)
    }
    return throwError(
      () => new Error('Something Happened with the request, please try again.')
    );
  }

  constructor(private http: HttpClient) { }

  /** GET Offers from the server */
  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.baseURL)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  /** GET Offer by ID from the server */
  getOffer(id:number): Observable<Offer> {
    const url = `${this.baseURL}/${id}`; // GET api/offers/3
    return this.http.get<Offer>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  //////// Save methods //////////

  /** POST: add a new offer to the database */
  addOffer(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(this.baseURL, offer, this.httpOptions)//test: JSON.stringify(offer)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** DELETE: delete the offer from the server */
  deleteOffer(id: number): Observable<unknown> {
    const url = `${this.baseURL}/${id}`; // DELETE api/offers/3
    return this.http.delete(url, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** PUT: update the offer on the server. Returns the updated offer upon success. */
  updateOffer(id: number,offer: Offer): Observable<Offer> {
    //TODO: Add Auth
    //httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    const url = `${this.baseURL}/${id}`; // PUT api/offers/32
    return this.http.put<Offer>(url, offer, this.httpOptions)//test: JSON.stringify(offer)
      .pipe(
        catchError(this.handleError)
      );
  }
}
