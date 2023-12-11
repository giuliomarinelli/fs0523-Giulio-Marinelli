import { Component, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { iLoginData } from '../../Models/auth/i-login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]]
  })

  color: string = ''

  valid!: boolean
  msg!: string
  errorMsg!: iLoginData

  ngDoCheck() {
    this.errorMsg = {
      email: this.setInvalidMessages('email'),
      password: this.setInvalidMessages('password')
    }
    this.msg = `${this.errorMsg.email}. ${this.errorMsg.password}`
    this.valid = this.loginForm['valid']
  }


  setInvalidMessages(fieldName: string): string {
    const field: AbstractControl | null = this.loginForm.get(fieldName)
    let errorMsg = ''
    if (field) {
      if (field.errors) {
        if (field.errors['required'] && fieldName === 'email') errorMsg += 'Email obbligatoria. '
        if (field.errors['required'] && fieldName === 'password') errorMsg += 'Password obbligatoria. '
        if (field.errors['email']) errorMsg += 'Formato email errato'
      }

    }
    return errorMsg
  }

  isValid(fieldName: string) {
    return this.loginForm.get(fieldName)?.valid && this.loginForm.get(fieldName)?.dirty
  }

  isInvalid(fieldName: string) {
    return !this.loginForm.get(fieldName)?.valid && this.loginForm.get(fieldName)?.dirty
  }

  logIn(): void {
    if (this.loginForm.valid) {
      this.authSvc.logIn(this.loginForm.value).subscribe(

        res => {
          if (this.router.url === '/') this.router.navigate(['/my-gmeteo'])
        },
        err => {
          this.valid = false
          if (err.status === 400 && err.error === "Cannot find user") {
            this.showModal1()
            console.log('err')
          } else {
            this.showModal2()
          }
        }
      )
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }




  showModal1(): void {
    this.isVisible1 = true
  }

  handleOk1(): void {
    this.isVisible1 = false
  }
  isVisible1 = false
  isVisible2 = false
  showModal2(): void {
    this.isVisible2 = true
  }

  handleOk2(): void {
    this.isVisible2 = false
  }
  constructor(private fb: FormBuilder, private authSvc: AuthService, private router: Router) { }





}
