import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-latte',
  templateUrl: './latte.page.html',
  styleUrls: ['./latte.page.scss'],
})
export class LattePage implements OnInit {

  name: string;
  quantity: number;
  price: number;
  total: any = 0.0;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.name = 'Latte'
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
    this.price = 2.50;
  }

  priceMedium(){
    this.price = 3.50;
  }

  priceLarge(){
    this.price = 4.50;
  }

}