import {Component} from '@angular/core';
import {MailService} from '../services/mail-service';

@Component({
  selector: 'item-container',
  template: `
    <div> This is item container</div>
    <item></item>
  `,
  providers: [
    {
      provide: MailService,
      useClass: MailService
    }
  ]
})
export class ItemContainerComponent {


}
