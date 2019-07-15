import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdatePage } from './update.page';
var routes = [
    {
        path: '',
        component: UpdatePage
    }
];
var UpdatePageModule = /** @class */ (function () {
    function UpdatePageModule() {
    }
    UpdatePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UpdatePage]
        })
    ], UpdatePageModule);
    return UpdatePageModule;
}());
export { UpdatePageModule };
//# sourceMappingURL=update.module.js.map