import {Component, EventEmitter, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {Observable, Subject, Subscription} from 'rxjs';
import {resolve} from '@angular/compiler-cli/src/ngtsc/file_system';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //#region Properties

  private readonly a: number;

  private subscription: Subscription;

  private anotherSubscription: Subscription;

  private _subject: Subject<number>;

  private observable: Observable<number>;

  public students: any[];

  private i = 0;

  //#endregion

  //#region Constructor

  public constructor(
    public readonly userService: UserService,
    protected router: Router
  ) {
    // tslint:disable-next-line:no-shadowed-variable
    this._subject = new Subject<number>();
    this.observable = this._subject.asObservable();

  }

  //#endregion

  //#region Methods

  public ngOnInit(): void {

    // this.userService.loadUsersAsync()
    //   .toPromise()
    //   .then(m => this.students = m);

    this.subscription = this.observable
      .pipe(
        distinctUntilChanged(),
        map(data => {
          return data + 2;
        }),
        filter(data => {
          return data % 2 === 0;
        }),
      )
      .subscribe(x => {
      console.log(x);
    });

  }

  //#endregion

  //#region Methods

  public clickPurchaseLaptop(): void {
    if (confirm('Are you sure to purchase this laptop ?')) {
      this.router.navigate(['/shopping-cart']);
    }

    return;
  }

  public clickMe(): void {
    this._subject.next(this.i);
  }

  public leaveMeAlone(): void {
    this.subscription?.unsubscribe();
    this.anotherSubscription?.unsubscribe();
  }

  //#endregion
}
