import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleMaterialModule } from '../material-module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';


/**
 * 主体模块
 */
@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    ExampleMaterialModule
  ],
  declarations: [
     MainComponent
  ],
  exports:      [],
  providers:    []
})
export class MainModule {
}
