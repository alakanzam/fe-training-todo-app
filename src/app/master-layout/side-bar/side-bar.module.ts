import {NgModule} from '@angular/core';
import {SideBarComponent} from './side-bar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SideBarComponent
      }
    ])
  ],
  declarations: [
    SideBarComponent
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule {

}
