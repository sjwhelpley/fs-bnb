import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CreatePage } from './create.page';
var routes = [
    {
        path: '',
        component: CreatePage
    }
];
var CreatePageModule = /** @class */ (function () {
    function CreatePageModule() {
    }
    CreatePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CreatePage]
        })
    ], CreatePageModule);
    return CreatePageModule;
}());
export { CreatePageModule };
//# sourceMappingURL=create.module.js.map