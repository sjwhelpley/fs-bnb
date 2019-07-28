import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor (
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.email, this.password).then((response) => {
      this.router.navigate(['home']);
    }).catch(err => {
      alert(err.message);
    });
  }
}
