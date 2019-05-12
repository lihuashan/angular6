import { Component, OnInit } from '@angular/core';
import {AppSharedVariableService} from '../../app-shared-variable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  navStatus: string;
  constructor(private appSharedVariableService: AppSharedVariableService) {
    console.log(appSharedVariableService.navStatus);
    this.navStatus = this.appSharedVariableService.navStatus;
  }

  /**
   * 初始化
   */
  ngOnInit() {
  }
}
