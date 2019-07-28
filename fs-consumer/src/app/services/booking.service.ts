import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor (
    private http: HttpClient
  ) { }

  getBookingsByUserId() {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("jwt");
      const httpOptions = { headers: new HttpHeaders(
        {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`
        }
      )};
      const id = localStorage.getItem('userId');
      this.http.get(`http://localhost:5000/api/booking/user/${id}`, httpOptions).subscribe((response: Booking[]) => {
        resolve(response);
      });
    });
  }

  create(numPeople, startDate, endDate, id_listing, id_user, status) {
    const token = localStorage.getItem("jwt");
    const httpOptions = { headers: new HttpHeaders(
      {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      }
    )};
    const newBooking = new Booking(numPeople, startDate, endDate, id_listing, id_user, status);
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/api/booking/', JSON.stringify(newBooking), httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }
}
