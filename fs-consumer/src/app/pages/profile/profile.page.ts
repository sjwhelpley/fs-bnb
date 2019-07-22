import { Component } from '@angular/core';

import { UserService } from '../../services/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  userFirstName: string;
  userLastName: string;
  userEmail: string;

  constructor (
    private userService: UserService,
    private navCtrl: NavController
  ) {
    this.userService.getById(this.userService.getLoggedinUserId()).then(user => {
      this.userFirstName = user[0].firstName;
      this.userLastName = user[0].lastName;
      this.userEmail = user[0].email;
    });
  }

  signout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("jwt");
    this.navCtrl.navigateRoot("/login");
  }
}
