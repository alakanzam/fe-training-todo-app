import {NgModule} from '@angular/core';
import {NavigationBarComponent} from './navigation-bar.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NavigationBarComponent
  }
];

@NgModule({
  imports: [
    // RouterModule.forChild(routes)
  ],
  exports: [
    NavigationBarComponent
  ],
  declarations: [
    NavigationBarComponent
  ]
})
export class NavigationBarModule {

}
