import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookingListingId: number;

  constructor(
    private http: HttpClient
  ) { }
  
  // GET Booking by Listing ID
  getByListingId(id) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("jwt");
      const httpOptions = { 
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`
          }
        )
      };
      this.http.get(`http://localhost:5000/api/booking/listing/${id}`, httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }

  // GET Booking by Listing ID & status
  getByListingIdStatus(id, status) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('jwt');
      const httpOptions = { headers: new HttpHeaders(
        {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`
        }
      )};
      this.http.get(`http://localhost:5000/api/booking/listing/status/${id}/${status}`, httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }

  // UPDATE status of Booking
  updateStatus(id, status) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("jwt");
      const httpOptions = { headers: new HttpHeaders(
        {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`
        }
      )};
      var data = { "status": status };
      this.http.patch(`http://localhost:5000/api/booking/update/status/${id}`, JSON.stringify(data), httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }

  // Set Listing ID to find booking requests for that Listing
  setBookingListingId(id) {
    this.bookingListingId = id;
  }
}
