import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  newBookings: Booking[];
  acceptedBookings: Booking[];
  rejectedBookings: Booking[];

  newBookingUsers: User[] = [];

  constructor(
    private bookingService: BookingService,
    private navCtrl: NavController,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.bookingService.getByListingIdStatus(this.bookingService.bookingListingId, "NEW").then((bookings: any) => {
      this.newBookings = bookings;
    
      for(let booking of this.newBookings) {
        this.userService.getById(booking.id_user).then((user: any) => {
          this.newBookingUsers.push(user[0]);
        });
      }
    });

    this.bookingService.getByListingIdStatus(this.bookingService.bookingListingId, "ACCEPTED").then((bookings: any) => {
      this.acceptedBookings = bookings;
    });

    this.bookingService.getByListingIdStatus(this.bookingService.bookingListingId, "REJECTED").then((bookings: any) => {
      this.rejectedBookings = bookings;
    });
  }

  // Go back to Listing-view page from Booking-request-view page
  back() {
    this.navCtrl.navigateBack('/view');
  }

  // Accept booking request
  accept(id) {
    this.bookingService.updateStatus(id, "ACCEPTED").then(() => {
      console.log("accepted request");
      this.ngOnInit();
    });
  }

  // Reject booking request
  reject(id) {
    this.bookingService.updateStatus(id, "REJECTED").then(() => {
      console.log("rejected request");
      this.ngOnInit();
    });
  }
}
