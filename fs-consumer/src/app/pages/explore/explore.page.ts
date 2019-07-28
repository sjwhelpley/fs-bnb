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
  public imgUrls: any[] = [];

  constructor ( 
    private listingService: ListingService,
    private navCtrl: NavController 
  ) { 
    this.listingService.getAll().then(listArr => {
      this.listings = listArr as Listing[];

      this.listings.forEach(listing => {
        this.listingService.getImgByListingId(listing.id).then((imgArr: any) => {
          let urlArr: string[] = [];
          imgArr.forEach(url => {
            urlArr.push(url.imgUrl);
          });
          this.imgUrls[listing.id] = urlArr;
        });
      });
    });
  }

  ionViewWillEnter() {
    this.listingService.getAll().then(listArr => {
      this.listings = listArr as Listing[];

      this.listings.forEach(listing => {
        this.listingService.getImgByListingId(listing.id).then((imgArr: any) => {
          let urlArr: string[] = [];
          imgArr.forEach(url => {
            urlArr.push(url.imgUrl);
          });
          this.imgUrls[listing.id] = urlArr;
        });
      });
    });
  }

  viewListing(id_listing) {
    this.listingService.setViewListingId(id_listing);
    this.navCtrl.navigateForward('listing-view');
  }
}
