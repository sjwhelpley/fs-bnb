import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ListingService } from '../../services/listing.service';

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
  
  constructor(
    private listingService: ListingService,
    private navCtrl: NavController
  ) { }

  createListing() {
    this.listingService.create(this.homeType, this.address, this.maxNumPeople, this.title, this.summary, this.pricePerNight, 0.0, parseInt(localStorage.getItem('userId'))).then(() => {
      this.navCtrl.navigateBack('tabs');
    });
  }

  back() {
    this.navCtrl.navigateBack('/view');
  }
}
