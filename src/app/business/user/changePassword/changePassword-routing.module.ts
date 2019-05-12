import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './changePassword.component';

const changePasswordRoutes: Routes = [
  {
    path: '', component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild((changePasswordRoutes))
  ],
  exports: [
    RouterModule
  ]
})

export class ChangePasswordRoutingModule {
}
