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

  constructor(
    private listingService: ListingService,
    private navCtrl: NavController
  ) { }

  backToExplore() {
    this.navCtrl.navigateBack('tabs/explore')
  }

  ionViewWillEnter() { 
    this.listingService.getViewListing().then((list: Listing[]) => {
      this.listing = list[0];
    });
  }
}
