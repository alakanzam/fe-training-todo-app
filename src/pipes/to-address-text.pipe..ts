import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toAddressText1'
})
export class ToAddressTextPipe implements PipeTransform {

  //#region Methods

  public transform(value: any, ...args: any[]): any {
    return `${value.street} ${value.city}`;
  }

  //#endregion
}
