import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class ShoppingCartGuard implements CanActivate {

  public constructor(protected router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const productId = route.params.id;
    if (productId === 'macbook-pro') {
      return this.router.createUrlTree(['/shopping-cart', 'surface-laptop']);
    }

    return true;
  }

}
