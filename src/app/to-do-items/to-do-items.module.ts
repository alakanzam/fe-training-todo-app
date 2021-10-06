import {NgModule} from '@angular/core';
import {ToDoItemsComponent} from './to-do-items.component';
import {CommonModule} from '@angular/common';

@NgModule({
  exports: [
    ToDoItemsComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    ToDoItemsComponent
  ]
})
export class ToDoItemsModule {

}
