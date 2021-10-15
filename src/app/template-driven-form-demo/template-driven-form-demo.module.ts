import {NgModule} from '@angular/core';
import {TemplateDrivenFormDemoComponent} from './template-driven-form-demo.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TemplateDrivenFormDemoComponent
      }
    ]),
    FormsModule,
    CommonModule
  ],
  declarations: [
    TemplateDrivenFormDemoComponent
  ]
})
export class TemplateDrivenFormDemoModule {

}
