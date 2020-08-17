import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacchiatoPageRoutingModule } from './macchiato-routing.module';

import { MacchiatoPage } from './macchiato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MacchiatoPageRoutingModule
  ],
  declarations: [MacchiatoPage]
})
export class MacchiatoPageModule {}
