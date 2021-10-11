import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {OutlineSecondaryButtonDirectiveModule} from '../directives/outline-secondary-button-directive.module';
import {MailService} from '../services/mail-service';
import {YahooMailService} from '../services/yahoo-mail.service';
import {ItemContainerComponent} from './item-container.component';
import {CommonService} from '../services/common.service';
import {ItemComponent} from './item.component';
import {MessageService} from '../services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemContainerComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OutlineSecondaryButtonDirectiveModule
  ],
  providers: [
    MessageService,
    {
      provide: CommonService,
      useClass: CommonService
    },
    {
      provide: MailService,
      useClass: YahooMailService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
