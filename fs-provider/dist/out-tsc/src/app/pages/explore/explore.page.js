import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ListingsService } from '../../services/listings.service';
var ExplorePage = /** @class */ (function () {
    function ExplorePage(listingsService) {
        this.listingsService = listingsService;
        this.listings = this.listingsService.getAll();
    }
    ExplorePage = tslib_1.__decorate([
        Component({
            selector: 'app-explore',
            templateUrl: 'explore.page.html',
            styleUrls: ['explore.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ListingsService])
    ], ExplorePage);
    return ExplorePage;
}());
export { ExplorePage };
//# sourceMappingURL=explore.page.js.map