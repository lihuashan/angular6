import { Component } from '@angular/core';
import {AppSharedVariableService} from './app-shared-variable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appSharedVariableService: AppSharedVariableService) {
    console.log(appSharedVariableService.navStatus);
  }
}
