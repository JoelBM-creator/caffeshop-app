import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'espresso',
    loadChildren: () => import('./coffe/espresso/espresso.module').then( m => m.EspressoPageModule)
  },
  {
    path: 'capuccino',
    loadChildren: () => import('./coffe/capuccino/capuccino.module').then( m => m.CapuccinoPageModule)
  },
  {
    path: 'macchiato',
    loadChildren: () => import('./coffe/macchiato/macchiato.module').then( m => m.MacchiatoPageModule)
  },
  {
    path: 'mocha',
    loadChildren: () => import('./coffe/mocha/mocha.module').then( m => m.MochaPageModule)
  },
  {
    path: 'latte',
    loadChildren: () => import('./coffe/latte/latte.module').then( m => m.LattePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
