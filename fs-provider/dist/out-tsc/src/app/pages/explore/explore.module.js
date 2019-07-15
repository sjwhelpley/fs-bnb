import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExplorePage } from './explore.page';
var ExplorePageModule = /** @class */ (function () {
    function ExplorePageModule() {
    }
    ExplorePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                RouterModule.forChild([{ path: '', component: ExplorePage }])
            ],
            declarations: [ExplorePage]
        })
    ], ExplorePageModule);
    return ExplorePageModule;
}());
export { ExplorePageModule };
//# sourceMappingURL=explore.module.js.map