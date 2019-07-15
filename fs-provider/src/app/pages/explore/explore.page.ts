import { Component } from '@angular/core';

import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage {
  public listings: any;

  constructor (private listingService: ListingService) {
    this.listings = this.listingService.getAll();
  }
}
