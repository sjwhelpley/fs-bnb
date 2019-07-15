import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedinUser;

  constructor(private http: HttpClient ) { }

  login(email, password) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/api/auth/login', [email, password]).subscribe((response) => {
        this.loggedinUser = response;
        resolve(response);
      });
    });
  }

  getLoggedinUser(): User {
    return this.loggedinUser;
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:5000/api/users/').subscribe((response) => {
        resolve(response);
      });
    });
  }

  createUser(firstName, lastName, cellPhone, email, password) {
    if(this.validateEmail(email)) {
      const newUser = new User(firstName, lastName, cellPhone, email, password);
      return new Promise((resolve, reject) => {
        this.http.post('http://localhost:5000/api/users/', JSON.stringify(newUser)).subscribe((response) => {
          resolve(response);
        });
      });
    } else {
      alert("Email already in use!");
    }
  }

  validateEmail(email: String) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/api/auth/validate', JSON.stringify(email)).subscribe((response) => {
        resolve(response);
      });
    });
  }
}