import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'recipe',
  templateUrl: 'recipe-main-page.component.html'
})
export class RecipeMainPageComponent {

  public constructor(public router: Router) {
  }

  public isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
