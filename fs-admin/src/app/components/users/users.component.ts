import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  navItems: Array<any> = [
    {
      name: 'Home',
      route: '/home'
    },
    {
      name: 'Users',
      route: '/users'
    },
    {
      name: 'Service Providers',
      route: '/service-providers'
    },
    {
      name: 'Listings',
      route: '/listings'
    },
    {
      name: 'Booking Requests',
      route: '/booking-requests'
    }
  ];

  users: User[];

  constructor (
    private userService: UserService,
    private router: Router
  ) { 
    this.userService.getAll().then((response: any) => {
      this.users = response;
    });
  }

  ngOnInit() {
  }

  navTo(page) {
    this.router.navigate([page.route]);
  }
}
