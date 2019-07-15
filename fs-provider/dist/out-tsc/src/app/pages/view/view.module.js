import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ViewPage } from './view.page';
var routes = [
    {
        path: '',
        component: ViewPage
    }
];
var ViewPageModule = /** @class */ (function () {
    function ViewPageModule() {
    }
    ViewPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ViewPage]
        })
    ], ViewPageModule);
    return ViewPageModule;
}());
export { ViewPageModule };
//# sourceMappingURL=view.module.js.map