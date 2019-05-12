import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/**
 * 主体组件
 */
@Component({
  selector: 'app-personal-info',
  templateUrl: './personalInfo.component.html',
  styleUrls: ['./personalInfo.component.css']
})
export class PersonalInfoComponent  {
  delayedFormControl = new FormControl('');
  userName: string;
  fullName: string;
  tel: string;
  email: string;
  isAdmin: number;
  sel: number;
  constructor() {
    setTimeout(() => this.delayedFormControl.setValue('hello'), 100);
  }
  submit() {
    console.log(this.userName, this.fullName, this.sel);
  }
}
