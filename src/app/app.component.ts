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

  public addTodoItem(): void {

    const item = new ToDoItem();
    item.id = this._idCounter;
    item.title = this.itemText;
    item.completed = false;

    this.items.push(item);
    this.itemText = '';
    this._idCounter++;
  }

  public onKeyPressed(event: KeyboardEvent): void {

    if (event.key !== 'Enter') {
      return;
    }

    this.addTodoItem();
  }

  public deleteTodoItem(item: ToDoItem): void {
    const tobeDeletedItem = this.items.findIndex(x => x.id === item.id);
    this.items.splice(tobeDeletedItem, 1);
  }

  public markItemAsCompleted(item: ToDoItem): void {
    console.log('markItemAsCompleted called');
    const toBeCompletedItem = this.items.findIndex(x => x.id === item.id);
    this.items[toBeCompletedItem].completed = true;
    this.items = [...this.items];
  }
  //#endregion
}
