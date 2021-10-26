import {Component, EventEmitter, OnInit} from '@angular/core';
import {ToDoItem} from '../models/to-do-item';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //#region Properties

  private _myEvent: Subject<any> = new Subject<any>();

  //#endregion

  //#region Properties

  public userRegistered: Observable<any>  = this._myEvent.asObservable();

  //#endregion

  //#region Constructor

  public constructor() {
  }

  //#endregion

  //#region Methods

  ngOnInit(): void {

    this.userRegistered.subscribe(data => {
      console.log(data);
    });

    this.userRegistered.subscribe(data => {
      console.log(data);
    });

    this._myEvent.next('a1232');





  }

  //#endregion
}
