import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

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
    public readonly userService: UserService,
    protected router: Router
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

  public clickPurchaseLaptop(): void {
    if (confirm('Are you sure to purchase this laptop ?')) {
      this.router.navigate(['/shopping-cart']);
    }

    return;
  }

  //#endregion
}
