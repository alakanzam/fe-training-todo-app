import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MailService} from '../services/mail-service';
import {YahooMailService} from '../services/yahoo-mail.service';
import {CommonService} from '../services/common.service';
import {MessageService} from '../services/message.service';
import {UserService} from '../services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {ToAddressTextPipeModule} from '../pipes/to-address-text-pipe.module';
import {ShoppingCartGuard} from '../guards/shopping-cart.guard';
import {ShoppingCartOutGuard} from '../guards/shopping-cart.out-guard';
import {ProductService} from '../services/product.service';
import {ShoppingCartResolve} from '../resolves/shopping-cart.resolve';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToAddressTextPipeModule
  ],
  providers: [
    ShoppingCartResolve,
    ShoppingCartGuard,
    ShoppingCartOutGuard,
    UserService,
    MessageService,
    ProductService,
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
