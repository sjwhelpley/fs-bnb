import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string;
  password: string;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private userService: UserService
  ) { }

  login() {
    this.userService.login(this.email, this.password).then(user => {
      this.navCtrl.navigateForward('tabs', user);
    }).catch(err => {
      this.presentAlert(err);
    });
  }

  register() {
    this.navCtrl.navigateForward('register');
  }

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to login',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }
}