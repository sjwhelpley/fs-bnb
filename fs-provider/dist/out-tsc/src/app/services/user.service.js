import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (email, password) {
        var _this = this;
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return new Promise(function (resolve, reject) {
            var data = "{\"email\":\"" + email + "\",\"password\":\"" + password + "\"}";
            _this.http.post('http://localhost:5000/api/auth/login/provider', data, httpOptions).subscribe(function (response) {
                localStorage.setItem('userid', response.toString());
                resolve(response);
            });
        });
    };
    UserService.prototype.register = function (firstName, lastName, cellPhone, email, password) {
        var _this = this;
        console.log("In user service to register");
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var newUser = new User(firstName, lastName, cellPhone, email, password);
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:5000/api/auth/register/provider', JSON.stringify(newUser), httpOptions).subscribe(function (response) {
                localStorage.setItem("userId", JSON.stringify(response.user.id));
                localStorage.setItem("jwt", response.jwt);
                resolve(response);
            });
        });
    };
    UserService.prototype.getLoggedinUserId = function () {
        return localStorage.getItem('userId');
    };
    UserService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:5000/api/provider/').subscribe(function (response) {
                resolve(response);
            });
        });
    };
    UserService.prototype.getById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get("http://localhost:5000/api/provider/" + id).subscribe(function (response) {
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
//# sourceMappingURL=user.service.js.map