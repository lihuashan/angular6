import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './personalInfo.component';

const personalInfoRoutes: Routes = [
  {
    path: '', component: PersonalInfoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(personalInfoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PersonalInfoRoutingModule { }
