import { Component } from '@angular/core';

import { ListingService } from '../../services/listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {
  name: string;
  location: string;
  price: number;
  imgUrl: string;
  
  constructor(
    private listingService: ListingService,
    private router: Router
  ) { }

  createListing() {
    this.listingService.create(this.name, this.location, this.price, this.imgUrl);
    this.router.navigateByUrl('/tabs/tab1');
  }
}
