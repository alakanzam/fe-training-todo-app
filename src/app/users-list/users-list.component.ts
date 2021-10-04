import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-users-list, div[app-hello]',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  // tslint:disable-next-line:no-input-rename
  @Input('my-users')
  users = [];

  @Output('user-deleted')
  public userBeingDeletedEvent: EventEmitter<any>

  public constructor() {
    this.userBeingDeletedEvent = new EventEmitter<any>();
  }

  public deleteUser(user): void {
    this.userBeingDeletedEvent.emit(user);
  }
}
