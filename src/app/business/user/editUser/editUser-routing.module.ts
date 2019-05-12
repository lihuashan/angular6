import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit.user.component';

const editUserRoutes: Routes = [
  {
    path: '',
    component: EditUserComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(editUserRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class EditUserRoutingModule {
}
