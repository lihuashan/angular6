import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleMaterialModule } from '../../material-module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule  } from './home-routing.module';


@NgModule({
  imports:      [
     CommonModule,
     HomeRoutingModule,
     ExampleMaterialModule
  ],
  declarations: [
     HomeComponent
  ],
  exports: [],
  providers: []
})
export class HomeModule { }
