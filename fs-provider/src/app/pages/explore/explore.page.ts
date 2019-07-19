import { Component } from '@angular/core';

import { ListingService } from '../../services/listing.service';
import { Listing } from 'src/app/models/listing';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage {
  public listings: Listing[];

  constructor (private listingService: ListingService) {
    this.listingService.getAll().then(listArr => {
      this.listings = listArr as Listing[];
    });
  }
}
