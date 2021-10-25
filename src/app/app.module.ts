import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {TodoItemModule} from './todo-item/todo-item.module';
import {MySelectorModule} from './my-selector/my-selector.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TodoItemModule,
    MySelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
