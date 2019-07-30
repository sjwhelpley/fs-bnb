import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/models/listing';
import { ListingService } from 'src/app/services/listing.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  list: Listing;
  homeType: string;
  address: string;
  maxNumPeople: number;
  title: string;
  summary: string;
  pricePerNight: number;
  id_provider: number;
  imgUrl: string;

  constructor(
    private listingService: ListingService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() { 
    this.list = this.listingService.view_listing;
    this.homeType = this.list.homeType;
    this.address = this.list.address;
    this.maxNumPeople = this.list.maxNumPeople;
    this.title = this.list.title;
    this.summary = this.list.summary;
    this.pricePerNight = this.list.pricePerNight;
    this.id_provider = this.list.id_provider;
    this.listingService.getImgByListingId(this.list.id).then((img: any) => {
      this.imgUrl = img;
    })
  }

  update() {
    let updatedListing = new Listing(this.homeType, this.address, this.maxNumPeople, this.title, this.summary, this.pricePerNight, this.id_provider);
    this.listingService.updateById(updatedListing, this.list.id).then(() => {
      this.listingService.updateImgByListingId(this.imgUrl, this.list.id).then(() => {
        this.navCtrl.navigateBack('/view');
      });
    });
  }

  delete() {
    this.listingService.delete(this.list.id).then(() => {
      this.listingService.deleteImgByListingId(this.list.id).then(() => {
        this.navCtrl.navigateBack('/tabs/explore');
      });
    });
  }

  back() {
    this.navCtrl.navigateBack('/view');
  }
}
