import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MochaPageRoutingModule } from './mocha-routing.module';

import { MochaPage } from './mocha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MochaPageRoutingModule
  ],
  declarations: [MochaPage]
})
export class MochaPageModule {}
