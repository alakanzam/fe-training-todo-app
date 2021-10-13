import {NgModule} from '@angular/core';
import {ShoppingCartComponent} from './shopping-cart.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingCartComponent
      }
    ])
  ]
})
export class ShoppingCartRoutingModule {

}