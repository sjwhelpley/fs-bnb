import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.getById(this.userService.getLoggedinUserId()).then(function (user) {
            _this.userFirstName = user[0].firstName;
            _this.userLastName = user[0].lastName;
            _this.userEmail = user[0].email;
        });
    }
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map