import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSharedVariableService } from './app-shared-variable.service';
// import { ExampleMaterialModule } from './material-module';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [AppSharedVariableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
