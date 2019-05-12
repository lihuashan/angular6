import { Component, OnInit, ViewChild } from '@angular/core';
// import {Router} from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/**
 * 主体组件
 */
@Component({
  selector: 'app-add-article',
  templateUrl: './add.article.component.html',
  styleUrls: ['./add.article.component.css']
})
export class AddArticleComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log = '';
  @ViewChild('myckeditor') ckeditor: any;
  delayedFormControl = new FormControl('');
  userName: string;
  isAdmin: number;
  constructor() {
    this.mycontent = `<p>My html content</p>`;
    setTimeout(() => this.delayedFormControl.setValue('hello'), 100);
  }
  submit() {
    console.log(this.userName);
  }
  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  onChange($event: any): void {
    console.log('onChange');
    // this.log += new Date() + "<br />";
  }
}
