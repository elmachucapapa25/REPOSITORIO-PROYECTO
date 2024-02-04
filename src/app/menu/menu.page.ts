import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goToHome() {
    this.navCtrl.navigateForward('menu/home')
  }

  goToIntro() {
    this.navCtrl.navigateForward('/intro')
  }

  goToAcerca() {
    this.navCtrl.navigateForward('/acerca')
  }

  logout(){
    this.navCtrl.navigateRoot("/login")
}

}