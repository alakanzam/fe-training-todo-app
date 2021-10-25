import {NgModule} from '@angular/core';
import {NewRecipeComponent} from './new-recipe.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: NewRecipeComponent
      }
    ])
  ],
  declarations: [
    NewRecipeComponent
  ]
})
export class NewRecipeModule {

}
