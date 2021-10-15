import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'users',
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit, OnDestroy {

  private _interval: any;

  public ngOnInit(): void {

    let i = 0;
    this._interval = setInterval(() => {
      i++;
      console.log(i);
    }, 1000);
  }

  public ngOnDestroy(): void {
    console.log('Destrooyed');
    clearInterval(this._interval);
  }

}
