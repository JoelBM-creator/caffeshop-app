import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacchiatoPage } from './macchiato.page';

const routes: Routes = [
  {
    path: '',
    component: MacchiatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacchiatoPageRoutingModule {}
