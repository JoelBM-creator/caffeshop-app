import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MochaPage } from './mocha.page';

const routes: Routes = [
  {
    path: '',
    component: MochaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MochaPageRoutingModule {}
