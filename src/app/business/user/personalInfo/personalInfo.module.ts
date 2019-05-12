import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleMaterialModule } from '../../../material-module';
import { PersonalInfoRoutingModule } from './personalInfo-routing.module';
import { PersonalInfoComponent } from './personalInfo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonalInfoRoutingModule,
    ExampleMaterialModule
  ],
  declarations: [
    PersonalInfoComponent
  ],
  exports: [
  ],
  providers: []
})
export class PersonalInfoModule { }
