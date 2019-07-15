import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Listing } from '../models/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingService { 

  constructor(private http: HttpClient) { }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:5000/api/listings/').subscribe((response) => {
        resolve(response);
      });
    });
  }

  create(name, location, price, imgUrl) {
    const newListing = new Listing(name, location, price, imgUrl);
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/api/listings/', JSON.stringify(newListing)).subscribe((response) => {
        resolve(response);
      });
    });
  }
}
