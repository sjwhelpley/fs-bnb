import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/app/models/booking';
import { Listing } from 'src/app/models/listing';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-trips',
  templateUrl: 'trips.page.html',
  styleUrls: ['trips.page.scss']
})
export class TripsPage {
  public bookings: Booking[] = [];
  public listings: Listing[] = [];
  
  constructor(
    private bookingService: BookingService,
    private listingService: ListingService
  ) { 
    this.bookingService.getBookingsByUserId().then(bookArr => {
      this.bookings = bookArr as Booking[];
      
      for(let i = 0; i < this.bookings.length; i++) {
        this.listingService.getById(this.bookings[i].id_listing).then(listArr => {
          this.listings.push(listArr[0]);
        });
      }
    });
  }  

  ionViewWillEnter() {
    this.bookingService.getBookingsByUserId().then(bookArr => {
      this.bookings = bookArr as Booking[];
      
      for(let i = 0; i < this.bookings.length; i++) {
        this.listingService.getById(this.bookings[i].id_listing).then(listArr => {
          this.listings.push(listArr[0]);
        });
      }
    });
  }
}
