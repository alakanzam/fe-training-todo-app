import {Component, Inject} from '@angular/core';
import {ToDoItem} from '../models/to-do-item';
import {ActivatedRoute} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //#region Properties



  //#endregion

  //#region Constructor

  public constructor(
    @Inject(DOCUMENT) protected readonly document: Document,
    protected readonly activatedRoute: ActivatedRoute) {
  }

  //#endregion

  //#region Methods


  //#endregion
}
