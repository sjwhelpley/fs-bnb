import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
