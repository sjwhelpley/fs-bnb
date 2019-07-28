import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Bookings } from 'src/app/models/bookings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-requests',
  templateUrl: './booking-requests.component.html',
  styleUrls: ['./booking-requests.component.scss']
})
export class BookingRequestsComponent implements OnInit {
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
  
  bookings: Bookings[];

  constructor (
    private bookingService: BookingService,
    private router: Router
  ) { 
    this.bookingService.getAll().then((bookArr: any) => {
      this.bookings = bookArr;
    });
  }

  ngOnInit() {
  }

  navTo(page) {
    this.router.navigate([page.route]);
  }

}
