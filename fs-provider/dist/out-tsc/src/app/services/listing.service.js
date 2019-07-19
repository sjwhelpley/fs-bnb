import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Listing } from '../models/listing';
var ListingService = /** @class */ (function () {
    function ListingService(http) {
        this.http = http;
    }
    ListingService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var jwt = localStorage.getItem("jwt");
            var httpOptions = { headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + jwt
                }) };
            _this.http.get('http://localhost:5000/api/listing/', httpOptions).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ListingService.prototype.create = function (homeType, address, maxNumPeople, title, summary, pricePerNight, rating) {
        var _this = this;
        var httpOptions = { headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("jwt")
            }) };
        var newListing = new Listing(homeType, address, maxNumPeople, title, summary, pricePerNight, rating);
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:5000/api/listing/', JSON.stringify(newListing), httpOptions).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ListingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ListingService);
    return ListingService;
}());
export { ListingService };
//# sourceMappingURL=listing.service.js.map