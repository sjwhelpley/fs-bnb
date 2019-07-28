import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { Listing } from '../../models/listing';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.page.html',
  styleUrls: ['./listing-view.page.scss'],
})
export class ListingViewPage {
  listing: Listing;
  imgUrls: any[] = [];

  constructor (
    private listingService: ListingService,
    private navCtrl: NavController
  ) {
    this.listingService.getViewListing().then((list: Listing[]) => {
      this.listing = list[0];

      this.listingService.getImgByListingId(this.listing.id).then((imgArr: any) => {
        imgArr.forEach(url => {
          this.imgUrls.push(url.imgUrl);
        });
      });
    });
  }

  backToExplore() {
    this.navCtrl.navigateBack('tabs/explore')
  }

  book(id_listing) {
    this.listingService.presentAlert(id_listing);
  }
}
