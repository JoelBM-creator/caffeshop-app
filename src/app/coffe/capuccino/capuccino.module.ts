import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapuccinoPageRoutingModule } from './capuccino-routing.module';

import { CapuccinoPage } from './capuccino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapuccinoPageRoutingModule
  ],
  declarations: [CapuccinoPage]
})
export class CapuccinoPageModule {}
