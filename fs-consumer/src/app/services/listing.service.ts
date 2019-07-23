import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Listing } from '../models/listing';
import { AlertController } from '@ionic/angular';
import { BookingService } from './booking.service';

@Injectable({
  providedIn: 'root'
})
export class ListingService { 
  viewListingId: number;

  constructor(
    private http: HttpClient,
    private alertCtrl: AlertController,
    private bookingService: BookingService ) { }

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

  getImages(id) {
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

  setViewListingId(id) {
    this.viewListingId = id;
  }

  getViewListing() {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("jwt");
      const httpOptions = { headers: new HttpHeaders(
        {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`
        }
      )};
      this.http.get(`http://localhost:5000/api/listing/${this.viewListingId}`, httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }

async presentAlert(id_listing) {
  let alert = await this.alertCtrl.create({
    header: 'Book Now',
    inputs: [
      {
        name: 'numPeople',
        placeholder: 'Number of People'
      },
      {
        name: 'startDate',
        placeholder: 'Start Date',
        type: 'date'
      },
      {
        name: 'endDate',
        placeholder: 'End Date',
        type: 'date'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'Book',
        handler: data => {
          this.bookingService.create(data.numPeople, data.startDate, data.endDate, id_listing, localStorage.getItem("userId"), "NEW");
        }
      }
    ]
  });
  await alert.present();
}
}
