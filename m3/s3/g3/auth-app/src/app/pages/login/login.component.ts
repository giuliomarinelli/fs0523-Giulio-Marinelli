import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private authSvc: AuthService) { }
  form!: FormGroup
  ngOnInit() {
    this.form = this.fb.group({
      email: this.fb.control(null),
      password: this.fb.control(null)
    })
  }

  logIn() {
    this.authSvc.logIn(this.form.value).subscribe(res => console.log(res))
  }

}
