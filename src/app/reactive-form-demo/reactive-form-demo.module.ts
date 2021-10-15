import {NgModule} from '@angular/core';
import {ReactiveFormDemoComponent} from './reactive-form-demo.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  exports: [
    ReactiveFormDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReactiveFormDemoComponent
      }
    ]),
    ReactiveFormsModule
  ],
  declarations: [
    ReactiveFormDemoComponent
  ]
})
export class ReactiveFormDemoModule {

}
