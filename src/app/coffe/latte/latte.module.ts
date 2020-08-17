import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LattePageRoutingModule } from './latte-routing.module';

import { LattePage } from './latte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LattePageRoutingModule
  ],
  declarations: [LattePage]
})
export class LattePageModule {}
