import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../../services/users.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, navCtrl, usersService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.usersService = usersService;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.usersService.login(this.email, this.password).then(function (user) {
            _this.navCtrl.navigateForward('tabs', user);
        }).catch(function (err) {
            _this.presentAlert(err);
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.navigateForward('register');
    };
    LoginPage.prototype.presentAlert = function (err) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alert',
                            subHeader: 'Failed to login',
                            message: err,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController,
            NavController,
            UserService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map