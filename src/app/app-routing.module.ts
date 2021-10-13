import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ShoppingCartGuard} from '../guards/shopping-cart.guard';
import {ShoppingCartOutGuard} from '../guards/shopping-cart.out-guard';
import {ShoppingCartResolve} from '../resolves/shopping-cart.resolve';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'shopping-cart/:id',
    canActivate: [ShoppingCartGuard],
    canDeactivate: [ShoppingCartOutGuard],
    loadChildren: () => import('./shopping-cart/shopping-cart.module')
      .then(m => m.ShoppingCartModule),
    resolve: {
      detailedProduct: ShoppingCartResolve
    }
  },
  {
    path: 'shopping-cart',
    canDeactivate: [ShoppingCartOutGuard],
    loadChildren: () => import('./shopping-cart/shopping-cart.module')
      .then(m => m.ShoppingCartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
