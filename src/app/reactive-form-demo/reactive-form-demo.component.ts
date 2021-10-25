import {Component} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
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
    this.registrationFormGroup.addControl('hobbies', new FormArray([new FormControl(), new FormControl()]));
  }

  //#endregion

  //#region Methods

  public handleFormSubmission(event): void {
    console.log(this.registrationFormGroup);
  }

  public getHobbiesControls(): AbstractControl[] {
    return (this.registrationFormGroup.get('hobbies') as FormArray).controls;
  }

  public addHobby(): void {

    const formArray = (this.registrationFormGroup.get('hobbies') as FormArray);
    const items = [1, 2, 3];
    for (let i = 0; i < items.length; i++) {
      const abstractControl = formArray.at(i);
      if (!abstractControl) {
        formArray.push(new FormControl(items[i]));
        continue;
      }
      abstractControl.patchValue(items[i]);
    }

    //
    // formArray.push(new FormControl('', [
    //   Validators.required
    // ]));

  }

  public clearHobbies(): void {
    const formArray = (this.registrationFormGroup.get('hobbies') as FormArray);
    formArray.clear();
  }

  //#endregion
}
