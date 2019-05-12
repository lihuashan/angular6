import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleMaterialModule } from '../../material-module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';



@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ExampleMaterialModule
  ],
  declarations: [
    UserComponent
  ],
  exports: [
  ],
  providers: []
})
export class UserModule { }
