import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  firstName: String;
  lastName: String;
  cellPhone: String;
  email: String;
  password: String;

  constructor ( 
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private userService: UserService 
  ) { }

  register() {
    this.userService.register(this.firstName, this.lastName, this.cellPhone, this.email, this.password).then(() =>{
      this.navCtrl.navigateForward('tabs');
    }).catch(err => {
      this.presentAlert(err);
    });
  }

  goToLogin() {
    this.navCtrl.navigateBack('login');
  }

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to register',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }
}
