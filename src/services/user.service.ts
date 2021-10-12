import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  //#region Constructor

  public constructor(protected readonly httpClient: HttpClient) {
  }

  //#endregion

  //#region Methods

  public loadUsersAsync(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  //#endregion

}
