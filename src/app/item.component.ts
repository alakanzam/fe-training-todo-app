import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MessageService} from '../services/message.service';
import {TableProperties} from '../constants/table-properties';

@Component({
  selector: 'item',
  template: `
   This is message from AppComponent: {{message | json}}
  `,
})
export class ItemComponent implements OnInit {

  public message: string;

  public constructor(public messageService: MessageService) {
  }

  public ngOnInit(): void {
    console.log(TableProperties.idProperty);

  }

}
