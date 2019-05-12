import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordRoutingModule } from './changePassword-routing.module';
import { ExampleMaterialModule } from '../../../material-module';
import { ChangePasswordComponent } from './changePassword.component';

@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChangePasswordRoutingModule,
    ExampleMaterialModule
  ]
})

export class ChangePasswordModule {
}
