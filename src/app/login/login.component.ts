import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AppSharedVariableService} from '../app-shared-variable.service';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  navStatus: string;
  constructor(private _router: Router, private appSharedVariableService: AppSharedVariableService) { console.log(44444); }
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordFormControl = new FormControl( '', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();
  Login (): void {
    this._router.navigate(['/app/home'], { replaceUrl: true });
    this.navStatus = this.appSharedVariableService.navStatus = '/app/home';
  }
}
