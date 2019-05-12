import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/**
 * 主体组件
 */
@Component({
  selector: 'app-change-password',
  templateUrl: './changePassword.component.html',
  styleUrls: ['./changePassword.component.css']
})

export class ChangePasswordComponent {
  delayedFormControl = new FormControl('');
  oldPassword: string;
  newPassword: string;
  duplicatePassword: string;
  constructor() {
    setTimeout(() => this.delayedFormControl.setValue('hello'), 100);
  }
  submit() {
    console.log(this.oldPassword, this.newPassword, this.duplicatePassword);
  }
}

