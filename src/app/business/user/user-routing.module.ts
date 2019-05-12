import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import {EditUserModule} from './editUser/edit.user.module';


const userRoutes: Routes = [
    {
      path: '',
      component: UserComponent,
      children: [
        {
          path: 'editUser',
          loadChildren: './editUser/edit.user.module#EditUserModule'
        }
      ]
    }
];


@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
