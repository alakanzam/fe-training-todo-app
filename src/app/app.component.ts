import {Component} from '@angular/core';
import {ToDoItem} from '../models/to-do-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //#region Properties

  // tslint:disable-next-line:variable-name
  private _idCounter = 1;

  public itemText: string;

  public items: ToDoItem[];

  //#endregion

  //#region Constructor

  public constructor() {
    this.items = [];
  }

  //#endregion

  //#region Methods

  public handleItemSelectedEvent(item: any): void {
    alert(`${item} has been selected`);
  }
  //#endregion
}
