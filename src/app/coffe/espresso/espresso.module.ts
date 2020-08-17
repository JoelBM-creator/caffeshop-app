import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspressoPageRoutingModule } from './espresso-routing.module';

import { EspressoPage } from './espresso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspressoPageRoutingModule
  ],
  declarations: [EspressoPage]
})
export class EspressoPageModule {}
