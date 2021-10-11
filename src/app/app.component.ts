import {Component, OnInit} from '@angular/core';
import {MailService} from '../services/mail-service';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //#region Constructor

  public constructor(
    public messageService: MessageService
  ) {
  }

  //#endregion

  //#region Methods

  public ngOnInit(): void {

  }

  public sendMessageToItem(): void {
    this.messageService.sendMessageClicked
      .emit('id');
  }

  public handleDropdownChangeEvent(item): void {
    console.log(item);
  }

  //#endregion
}
