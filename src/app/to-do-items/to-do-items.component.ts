import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoItem} from '../../models/to-do-item';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent {

  //#region Properties

  @Input()
  public items: ToDoItem[];

  @Output()
  public deleteTodoItemEvent: EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>();

  @Output()
  public markItemAsCompletedEvent: EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>();

  //#endregion

  //#region Constructor

  //#endregion

  //#region Methods

  public deleteTodoItem(item: ToDoItem): void {
    this.deleteTodoItemEvent.emit(item);
  }

  public markItemAsCompleted(item: ToDoItem): void {
    this.markItemAsCompletedEvent.emit(item);
  }

  //#endregion
}
