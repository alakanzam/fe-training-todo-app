import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {UserService} from '../services/user.service';
import {Observable, of} from 'rxjs';

describe('AppComponent', () => {

  //#region Life cycle hooks

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  //#endregion

  //#region Methods

  it('loadUsersAsync must be called in ngOnInit', (done) => {

    const fakeUserService: UserService = new UserService(null);
    fakeUserService['loadUsersAsync'] = () =>  {
      done();
      expect(true).toBeTrue();
      return of(void([]));
    };

    const appComponent = new AppComponent(fakeUserService);
    appComponent.ngOnInit();
  });

  //#endregion
});
