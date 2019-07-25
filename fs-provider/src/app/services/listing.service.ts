import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Listing } from '../models/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingService { 
  public view_listing: Listing;

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

  getImgByListingId(id) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("jwt");
      const httpOptions = { headers: new HttpHeaders(
        {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`
        }
      )};
      this.http.get(`http://localhost:5000/api/listing/img/${id}`, httpOptions).subscribe((response) => {
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

  create(homeType, address, maxNumPeople, title, summary, pricePerNight, rating, id_provider) {
    const token = localStorage.getItem("jwt");
    const httpOptions = { headers: new HttpHeaders(
      {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      }
    )};
    const newListing = new Listing(homeType, address, maxNumPeople, title, summary, pricePerNight, id_provider);
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/api/listing/', JSON.stringify(newListing), httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }

  delete(id) {
    const token = localStorage.getItem("jwt");
    const httpOptions = { headers: new HttpHeaders(
      {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      }
    )};
    return new Promise((resolve, reject) => {
      this.http.delete(`http://localhost:5000/api/listing/delete/${id}`, httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }

  deleteImgByListingId(id) {
    const token = localStorage.getItem("jwt");
    const httpOptions = { headers: new HttpHeaders(
      {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      }
    )};
    return new Promise((resolve, reject) => {
      this.http.delete(`http://localhost:5000/api/listing/delete/img/${id}`, httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }

  updateById(listing, id) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("jwt");
      const httpOptions = { headers: new HttpHeaders(
        {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`
        }
      )};
      this.http.patch(`http://localhost:5000/api/listing/update/${id}`, JSON.stringify(listing), httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }

  getViewListing(id) {
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
}