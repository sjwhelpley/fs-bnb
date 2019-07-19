import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Listing } from '../models/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingService { 

  constructor(private http: HttpClient) { }

  getAll() {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("jwt");
      const httpOptions = { headers: new HttpHeaders(
        {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`
        }
      )};
      this.http.get('http://localhost:5000/api/listing/', httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("jwt");
      const httpOptions = { headers: new HttpHeaders(
        {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`
        }
      )};
      this.http.get(`http://localhost:5000/api/listing/${id}`, httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }

  create(homeType, address, maxNumPeople, title, summary, pricePerNight, rating) {
    const token = localStorage.getItem("jwt");
    const httpOptions = { headers: new HttpHeaders(
      {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      }
    )};
    const newListing = new Listing(homeType, address, maxNumPeople, title, summary, pricePerNight, rating);
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/api/listing/', JSON.stringify(newListing), httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }
}
