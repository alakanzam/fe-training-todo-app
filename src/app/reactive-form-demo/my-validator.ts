import {AbstractControl, ValidationErrors} from '@angular/forms';

export class MyValidator {

  public static threeLetter(control: AbstractControl): ValidationErrors | null {
    return {
      threeLetter: {
        actualValue: control.value
      }
    };
  }

}
