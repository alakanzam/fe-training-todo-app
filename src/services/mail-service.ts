import {Injectable} from '@angular/core';

@Injectable()
export class MailService {

  public sendMail(): void {
    console.log('Send by using basic email');
  }

}
