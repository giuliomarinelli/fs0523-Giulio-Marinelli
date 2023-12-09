import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });

  logIn(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm)
      this.authSvc.logIn(this.loginForm.value).subscribe(res => console.log(res))
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: FormBuilder, private authSvc: AuthService) {}
}
