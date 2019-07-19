import { Component } from '@angular/core';

import { ListingService } from '../../services/listing.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {
  homeType: string;
  address: string;
  maxNumPeople: number;
  title: string;
  summary: string;
  pricePerNight: number;
  rating: number;
  
  constructor(
    private listingService: ListingService,
    private navCtrl: NavController
  ) { }

  createListing() {
    this.listingService.create(this.homeType, this.address, this.maxNumPeople, this.title, this.summary, this.pricePerNight, this.rating).then(() => {
      this.navCtrl.navigateBack('tabs');
    });
  }
}
