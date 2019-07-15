import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'tabs',
    component: TabsPage,
    children: [
      { path: 'explore', loadChildren: '../explore/explore.module#ExplorePageModule'},
      { path: 'trips', loadChildren: '../trips/trips.module#TripsPageModule'},
      { path: 'inbox', loadChildren: '../inbox/inbox.module#InboxPageModule'},
      { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule'}
    ]
  },
  {
    path:'',
    redirectTo: '/tabs/explore',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
