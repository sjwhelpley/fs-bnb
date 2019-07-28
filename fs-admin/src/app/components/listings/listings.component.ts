import { Component, OnInit } from '@angular/core';

import { Listings } from '../../models/listings';
import { ListingService } from 'src/app/services/listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
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

  listings: Listings[];

  constructor (
    private listingService: ListingService,
    private router: Router
  ) {
    this.listingService.getAll().then((listArr: any) => {
      this.listings = listArr;
    });
  }

  ngOnInit() {
  }

  navTo(page) {
    this.router.navigate([page.route]);
  }

}
