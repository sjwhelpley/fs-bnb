import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listing } from '../models/listings';
var ListingsService = /** @class */ (function () {
    function ListingsService(http) {
        this.http = http;
    }
    ListingsService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:5000/api/listings/').subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ListingsService.prototype.create = function (name, location, price, imgUrl) {
        var _this = this;
        var newListing = new Listing(name, location, price, imgUrl);
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:5000/api/listings/', JSON.stringify(newListing)).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ListingsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ListingsService);
    return ListingsService;
}());
export { ListingsService };
//# sourceMappingURL=listings.service.js.map