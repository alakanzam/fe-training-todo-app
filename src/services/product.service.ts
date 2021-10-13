import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable()
export class ProductService {

  public loadProductDetailAsync(): Observable<any> {
    return of({title: 'This is Macbook pro'})
      .pipe(
        delay(10000)
      );
  }
}
