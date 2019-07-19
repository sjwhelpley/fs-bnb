import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ListingService } from '../../services/listing.service';
var ExplorePage = /** @class */ (function () {
    function ExplorePage(listingService) {
        var _this = this;
        this.listingService = listingService;
        this.listingService.getAll().then(function (listArr) {
            _this.listings = listArr;
        });
    }
    ExplorePage = tslib_1.__decorate([
        Component({
            selector: 'app-explore',
            templateUrl: 'explore.page.html',
            styleUrls: ['explore.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ListingService])
    ], ExplorePage);
    return ExplorePage;
}());
export { ExplorePage };
//# sourceMappingURL=explore.page.js.map