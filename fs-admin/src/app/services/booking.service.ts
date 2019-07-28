import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor (
    private http: HttpClient
  ) { }

  getAll() {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("jwt");
      const httpOptions = { headers: new HttpHeaders(
        {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`
        }
      )};
      this.http.get('http://localhost:5000/api/booking/', httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }
}
