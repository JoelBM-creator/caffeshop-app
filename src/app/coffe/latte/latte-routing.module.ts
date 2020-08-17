import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LattePage } from './latte.page';

const routes: Routes = [
  {
    path: '',
    component: LattePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LattePageRoutingModule {}
