import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  coffes: any[];

  constructor(private navCtrl: NavController) {}

  ngOnInit(): void {
    this.coffes = [
      {
        coffeId: '1',
        coffeName: "Espresso",
        coffeImage: '../../assets/images/coffesImgs/Espresso.svg',
        coffeNav: 'espresso'
      },
      {
        coffeId: '2',
        coffeName: "Cappuccino",
        coffeImage: '../../assets/images/coffesImgs/Cappuccino.svg',
        coffeNav: 'capuccino'
      },
      {
        coffeId: '3',
        coffeName: "Macchiato",
        coffeImage: '../../assets/images/coffesImgs/macciato.svg',
        coffeNav: 'macchiato'
      },
      {
        coffeId: '4',
        coffeName: "Mocha",
        coffeImage: '../../assets/images/coffesImgs/Mocha.svg',
        coffeNav: 'mocha'
      },
      {
        coffeId: '5',
        coffeName: "Latte",
        coffeImage: '../../assets/images/coffesImgs/latte.svg',
        coffeNav: 'latte'
      }
    ]
  }

  navCoffe(coffe) {
    this.navCtrl.navigateRoot(coffe);
  }
}
