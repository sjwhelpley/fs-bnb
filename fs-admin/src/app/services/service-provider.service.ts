import { Injectable } from '@angular/core';
import { ServiceProvider } from '../models/service-provider.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {
  serviceProviders: Array<ServiceProvider>;

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
      this.http.get('http://localhost:5000/api/user/', httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }
}
