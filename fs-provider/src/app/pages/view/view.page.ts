import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ListingService } from 'src/app/services/listing.service';
import { Listing } from 'src/app/models/listing';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  listing: Listing;
  imgUrls: any[];
  
  constructor(
    private navCtrl: NavController,
    private listingService: ListingService,
    private bookingService: BookingService
  ) { }

  ngOnInit() { 
    this.listing = this.listingService.view_listing;
    this.listingService.getImgByListingId(this.listing.id).then((imgArr: any) => {
      let urlArr: string[] = [];
      imgArr.forEach(url => {
        urlArr.push(url.imgUrl);
      });
      this.imgUrls = urlArr;
    });
  }

  // Go back from Listing-view to Explore
  back() {
    this.navCtrl.navigateBack('/tabs/explore');
  };

  // Set Listing to get booking requests from & navigate to Booking-view page
  viewBookingRequests(id) {
    this.bookingService.setBookingListingId(id);
    this.navCtrl.navigateForward('/bookings');
  }
}
