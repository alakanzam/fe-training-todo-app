import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userData = [
    {
      name: 'Van A',
      age: 16
    }, {
      name: 'Van B',
      age: 10
    }
  ];



  public appComponentDeleteUser(user): void {
    console.log('From app component');
    console.log('Deleted user' + user);
  }

  public clear() {
    this.userData = [];
  }

}
