import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRouterModule } from './login.router.module';
import { LoginComponent } from './login.component';
import { ExampleMaterialModule } from '../material-module';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRouterModule,
    ExampleMaterialModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule {
}
