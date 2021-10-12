import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //#region Properties

  private readonly a: number;

  public students: any[];

  //#endregion

  //#region Constructor

  public constructor(
    public readonly userService: UserService
  ) {

  }

  //#endregion

  //#region Methods

  public ngOnInit(): void {

    this.userService.loadUsersAsync()
      .toPromise()
      .then(m => this.students = m);
  }

  //#endregion

  //#region Methods

  public convertAddress(address: any): string {
    return `${address.street} ${address.city}`;
  }

  //#endregion
}
