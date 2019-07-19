import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ListingService } from '../../services/listing.service';
import { NavController } from '@ionic/angular';
var CreatePage = /** @class */ (function () {
    function CreatePage(listingService, navCtrl) {
        this.listingService = listingService;
        this.navCtrl = navCtrl;
    }
    CreatePage.prototype.createListing = function () {
        var _this = this;
        this.listingService.create(this.homeType, this.address, this.maxNumPeople, this.title, this.summary, this.pricePerNight, this.rating).then(function () {
            _this.navCtrl.navigateBack('tabs');
        });
    };
    CreatePage = tslib_1.__decorate([
        Component({
            selector: 'app-create',
            templateUrl: './create.page.html',
            styleUrls: ['./create.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ListingService,
            NavController])
    ], CreatePage);
    return CreatePage;
}());
export { CreatePage };
//# sourceMappingURL=create.page.js.map