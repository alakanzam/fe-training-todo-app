import {NgModule} from '@angular/core';
import {MySelectorComponent} from './my-selector.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
    exports: [
        MySelectorComponent
    ],
  imports: [
    FormsModule,
    CommonModule
  ],
    declarations: [
        MySelectorComponent
    ]
})
export class MySelectorModule {

}
