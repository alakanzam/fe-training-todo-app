import {NgModule} from '@angular/core';
import {ShoppingCartComponent} from './shopping-cart.component';
import {ShoppingCartRoutingModule} from './shopping-cart-routing.module';
import {RouterModule} from '@angular/router';
import {NavigationBarModule} from '../master-layout/navigation-bar/navigation-bar.module';

@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
    imports: [
        ShoppingCartRoutingModule,
        RouterModule,
        NavigationBarModule
    ]
})
export class ShoppingCartModule {

}
