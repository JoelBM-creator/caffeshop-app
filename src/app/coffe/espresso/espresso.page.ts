import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-espresso',
  templateUrl: './espresso.page.html',
  styleUrls: ['./espresso.page.scss'],
})

export class EspressoPage implements OnInit {
  name: string;
  quantity: number;
  price: number;
  total: any = 0.0;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.name = 'Espresso'
    this.quantity = 0;
    this.price = 0;
  }

  back() {
    this.navCtrl.navigateRoot('tabs/tab2');
  }

  moreQuant() {
    (this.quantity++);
    this.total = this.total + this.price;
  }

  minusQuant() {
    if(this.quantity >= 1 ){
      this.total = this.total - this.price;
      (this.quantity--);
    }
  }

  priceSmall(){
    this.price = 1.50;
  }

  priceMedium(){
    this.price = 2.50;
  }

  priceLarge(){
    this.price = 3.50;
  }

}
