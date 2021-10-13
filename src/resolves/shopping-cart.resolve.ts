import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {ProductService} from '../services/product.service';

@Injectable()
export class ShoppingCartResolve implements Resolve<any> {

  public constructor(protected readonly productService: ProductService) {
  }

  //#region Methods

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.productService.loadProductDetailAsync();
  }

  //#endregion
}
