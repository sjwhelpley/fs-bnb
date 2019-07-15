import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
    { path: 'update', loadChildren: './pages/update/update.module#UpdatePageModule' },
    { path: 'view', loadChildren: './pages/view/view.module#ViewPageModule' },
    { path: 'create', loadChildren: './pages/create/create.module#CreatePageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map