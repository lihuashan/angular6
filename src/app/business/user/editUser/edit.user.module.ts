import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserRoutingModule } from './editUser-routing.module';
import { EditUserComponent } from './edit.user.component';


@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
    CommonModule,
    EditUserRoutingModule
  ],
  exports: [],
  providers: []
})

export class EditUserModule {
}
