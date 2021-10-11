import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class MessageService {

  public message: string;


  public sendMessageClicked: EventEmitter<string>;

  public constructor() {
    this.sendMessageClicked = new EventEmitter<string>();
  }


}
