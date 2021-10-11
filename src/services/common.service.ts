import {Injectable} from '@angular/core';

@Injectable()
export class CommonService {

  //#region Methods

  public formatDate(date: Date): string {
    return date.toDateString();
  }

  public upper(text: string): string {
    return text.toUpperCase();
  }

  public static displayNow(): void {

  }

  //#endregion

}
