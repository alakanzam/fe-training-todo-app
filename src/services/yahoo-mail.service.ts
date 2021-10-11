import {Injectable} from '@angular/core';
import {MailService} from './mail-service';

@Injectable()
export class YahooMailService extends MailService {

  public mailSent = 0;

  public sendMail(): void {
    console.log('Send by Yahoo email');
  }

}
