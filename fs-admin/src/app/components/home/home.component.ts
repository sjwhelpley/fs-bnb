import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

  constructor (
    private router: Router
  ) { }

  ngOnInit() { }

  navTo(page) {
    this.router.navigate([page.route]);
  }
}
