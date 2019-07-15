import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:5000/api/auth/login', [email, password]).subscribe(function (response) {
                _this.loggedinUser = response;
                resolve(response);
            });
        });
    };
    UserService.prototype.getLoggedInUser = function () {
        return this.loggedinUser;
    };
    UserService.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:5000/api/users/').subscribe(function (response) {
                resolve(response);
            });
        });
    };
    UserService.prototype.createUser = function (firstName, lastName, cellPhone, email, password) {
        var _this = this;
        if (this.validateEmail(email)) {
            var newUser_1 = new Users(firstName, lastName, cellPhone, email, password);
            return new Promise(function (resolve, reject) {
                _this.http.post('http://localhost:5000/api/users/', JSON.stringify(newUser_1)).subscribe(function (response) {
                    resolve(response);
                });
            });
        }
        else {
            alert("Email already in use!");
        }
    };
    UserService.prototype.validateEmail = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:5000/api/auth/validate', email).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=users.service.js.map