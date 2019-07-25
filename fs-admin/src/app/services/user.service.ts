import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor (
    private http: HttpClient
  ) { }
  
  login(email, password) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return new Promise((resolve, reject) => {
      let data = `{"email":"${email}","password":"${password}"}`;
      this.http.post('http://localhost:5000/api/auth/login/admin', data, httpOptions).subscribe((response: any) => {
          localStorage.setItem('userId', response.user.id);
          localStorage.setItem('jwt', response.jwt);
          resolve(response);
        }, 
        (err) => {
          reject(err);
        }
      );
    });
  }

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
