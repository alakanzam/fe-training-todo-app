import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'template-driven-form-demo',
  templateUrl: 'template-driven-form-demo.component.html',
  styleUrls: ['./template-driven-form-demo.component.css']
})
export class TemplateDrivenFormDemoComponent {

  //#region Properties

  public name: string;

  public age: number;

  //#endregion

  //#region Methods

  public handleFormSubmission(ngForm: NgForm, nameControl: any): void {
    console.log(nameControl);
    // if (ngForm.invalid) {
    //   alert('Form is invalid');
    //   return;
    // }
    //
    // alert('Form is submitted');
  }

  //#endregion
}
