import {NgModule} from '@angular/core';
import {RecipeMainPageComponent} from './recipe-main-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: RecipeMainPageComponent,
        children: [
          {
            path: 'new-recipe',
            loadChildren: () => import('../new-recipe/new-recipe.module').then(m => m.NewRecipeModule)
          }
        ]
      }
    ]),
    CommonModule
  ],
  declarations: [
    RecipeMainPageComponent
  ]
})
export class RecipeMainPageModule {

}
