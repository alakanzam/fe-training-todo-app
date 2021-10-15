import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './users.component';
import {NavigationBarModule} from '../master-layout/navigation-bar/navigation-bar.module';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: UsersComponent
        }]),
        NavigationBarModule
    ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule {

}
