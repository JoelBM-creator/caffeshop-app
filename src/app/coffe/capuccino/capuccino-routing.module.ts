import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapuccinoPage } from './capuccino.page';

const routes: Routes = [
  {
    path: '',
    component: CapuccinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapuccinoPageRoutingModule {}
