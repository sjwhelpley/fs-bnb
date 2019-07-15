import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            { path: 'explore', loadChildren: '../explore/explore.module#ExplorePageModule' },
            { path: 'inbox', loadChildren: '../inbox/inbox.module#InboxPageModule' },
            { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/explore',
        pathMatch: 'full'
    }
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                TabsPageRoutingModule
            ],
            declarations: [TabsPage]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());
export { TabsPageModule };
//# sourceMappingURL=tabs.module.js.map