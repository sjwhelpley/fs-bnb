import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ListingsService } from '../../services/listings.service';
import { Router } from '@angular/router';
var CreatePage = /** @class */ (function () {
    function CreatePage(listingsService, router) {
        this.listingsService = listingsService;
        this.router = router;
    }
    CreatePage.prototype.createListing = function () {
        this.listingsService.create(this.name, this.location, this.price, this.imgUrl);
        this.router.navigateByUrl('/tabs/tab1');
    };
    CreatePage = tslib_1.__decorate([
        Component({
            selector: 'app-create',
            templateUrl: './create.page.html',
            styleUrls: ['./create.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ListingsService,
            Router])
    ], CreatePage);
    return CreatePage;
}());
export { CreatePage };
//# sourceMappingURL=create.page.js.map