import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
      this.http.post('http://localhost:5000/api/auth/login/user', data, httpOptions).subscribe((response: any) => { 
        localStorage.setItem('userId', response.user.id);
        localStorage.setItem('jwt', response.jwt);
        resolve(response);
      },
      (err) => {
        reject(err);
      });
    });
  }

  register(firstName, lastName, cellPhone, email, password) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const newUser = new User(firstName, lastName, cellPhone, email, password);
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/api/auth/register/user', JSON.stringify(newUser), httpOptions).subscribe((response: any) => {
        localStorage.setItem("userId", response.user.id);
        localStorage.setItem("jwt", response.jwt);
        resolve(response);
      },
      (err) => {
        reject(err);
      });
    });
  }

  getLoggedinUserId() {
    return localStorage.getItem('userId');
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:5000/api/provider/').subscribe((response) => {
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
      this.http.get(`http://localhost:5000/api/user/${id}`, httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }
}