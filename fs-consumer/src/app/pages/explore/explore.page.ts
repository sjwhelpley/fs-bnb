import { Component } from '@angular/core';

import { ListingService } from '../../services/listing.service';
import { Listing } from '../../models/listing';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage {
  public listings: Listing[];
  public images: string[][];

  constructor ( 
    private listingService: ListingService,
    private navCtrl: NavController 
  ) { }

  ionViewWillEnter() {
    this.listingService.getAll().then(listArr => {
      this.listings = listArr as Listing[];
    });

    this.listings.forEach(listing => {
      this.listingService.getImages(listing.id).then((imgArr: string[]) => {
        this.images[listing.id] = imgArr;
      }).catch(err => {
        console.log(err);
      })
    });
  }

  viewListing(id_listing) {
    this.listingService.setViewListingId(id_listing);
    this.navCtrl.navigateForward('listing-view');
  }
}
