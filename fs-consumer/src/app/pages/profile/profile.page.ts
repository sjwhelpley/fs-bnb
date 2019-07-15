import { Component } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  currentUser;

  constructor (private userService: UserService ) { 
    this.currentUser = this.userService.getLoggedinUser();
  }
}
