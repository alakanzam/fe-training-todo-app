import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'users',
  templateUrl: 'shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  public title: string;

  public constructor(protected readonly productService: ProductService,
                     protected readonly activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.activatedRoute.data.subscribe(x => this.title = x.detailedProduct.title);
  }
}
