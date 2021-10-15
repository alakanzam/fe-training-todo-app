import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidator} from './my-validator';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent {

  //#region Properties

  public registrationFormGroup: FormGroup;

  //#endregion

  //#region Constructor

  public constructor() {
    this.registrationFormGroup = new FormGroup({});
    this.registrationFormGroup.addControl('name',
      new FormControl(null, [
        Validators.required,
        Validators.pattern('^Nguyen*.$'),
        MyValidator.threeLetter
      ]));
    this.registrationFormGroup.addControl('age', new FormControl());
  }

  //#endregion

  //#region Methods

  public handleFormSubmission(event): void {
    console.log(this.registrationFormGroup);
  }

  //#endregion
}
