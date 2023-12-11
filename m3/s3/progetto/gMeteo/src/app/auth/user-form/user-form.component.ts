import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, ValidatorFn } from '@angular/forms';
import { iRegister } from '../../Models/auth/i-register';
import { iAuthData } from '../../Models/auth/i-auth-data';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})

export class UserFormComponent {
  constructor(private fb: FormBuilder, private authSvc: AuthService) { }
  @Input() formData!: iRegister
  form!: FormGroup
  errorMsg!: iRegister

  unmatch: boolean = false

  ngDoCheck() {
    this.errorMsg = {
      name: this.setInvalidMessages('name'),
      surname: this.setInvalidMessages('surname'),
      email: this.setInvalidMessages('email'),
      dateOfBirth: this.setInvalidMessages('immagineProfilo'),
      gender: this.setInvalidMessages('genere'),
      password: this.setInvalidMessages('password'),
      confirmPassword: (this.form.controls['confirmPassword'].value !== this.form.controls['password'].value) && (this.form.controls['confirmPassword'].dirty) ? 'Mancata corrispondenza' : this.setInvalidMessages('confirmPassword'),
      phoneNumber: this.setInvalidMessages('phoneNumber')
    }

    if (this.form.controls['confirmPassword'].value !== this.form.controls['password'].value) {
      this.unmatch = true
    } else {
      this.unmatch = false
    }

  }

  setInvalidMessages(fieldName: string): string {
    const field: AbstractControl | null = this.form.get(fieldName)
    let errorMsg = ''
    if (field) {
      if (field.errors) {
        if (field.errors['required']) errorMsg += 'Campo obbligatorio'
        if (field.errors['minlength'] && (fieldName === 'name' || fieldName === 'surname')) errorMsg += 'Minimo 2 caratteri'
        if (field.errors['minlength'] && (fieldName === 'password')) errorMsg += 'Minimo 12 caratteri'
        if (field.errors['firstCapitalLetters'] && field.value?.length >= 2 && (fieldName === 'name' || fieldName==='surname')) errorMsg += 'Iniziale minuscola'
        if (field.errors['pattern'] && (fieldName === 'name' || fieldName === 'surname')) errorMsg += ' - Ammesse solo lettere'
        if (field.errors['email']) errorMsg += 'Formato non valido'
        if (field.errors['pattern'] && fieldName === 'phoneNumber') errorMsg += 'Formato non valido'
      }

    }
    return errorMsg
  }

  register: boolean = true
  ngOnInit() {
    if (!this.formData) {
      this.formData = {
        name: null,
        surname: null,
        email: null,
        dateOfBirth: null,
        gender: null,
        password: null,
        confirmPassword: null,
        phoneNumber: null
      }
    } else {
      this.register = false

    }

    this.form = this.fb.group(
      {
        name: this.fb.control(null, [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z\s]*$/), this.firstCapitalLetters]),
        surname: this.fb.control(null, [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z\s]*$/), this.firstCapitalLetters]),
        password: this.fb.control(null, [Validators.required, Validators.minLength(12)]),
        confirmPassword: this.fb.control(null),
        gender: this.fb.control('M'),
        phoneNumber: this.fb.control(null, [Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)]),
        dateOfBirth: this.fb.control(null),
        email: this.fb.control(null, [Validators.required, Validators.email])
      }
    )


  }



  firstCapitalLetters: ValidatorFn = (formField: AbstractControl): ValidationErrors | null => {
    if (formField.value) {
      const stringToCheck: string = formField.value.replace(/\s\s+/g, ' ').trim()
      const arrString: string[] = stringToCheck.split(' ')
      const regex = new RegExp(/^[A-Z]/)
      for (let i: number = 0; i < arrString.length; i++) {
        if (!regex.test(arrString[i])) return { firstCapitalLetters: true }
      }
      return null
    }
    return { firstCapitalLetters: true }
  }

  registered: boolean = false

  submit() {
    if (this.form.valid) {
      const defValue: any = {...this.form.value}
      delete defValue.confirmPassword
      this.authSvc.signUp(this.form.value).subscribe(
          res => this.registered = true,
          err => {
            if (err.error === 'Email already exists' && err.status ===400) this.showModal()
          }
      )
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  isValid(fieldName: string) {
    return this.form.get(fieldName)?.valid && this.form.get(fieldName)?.dirty
  }

  isInvalid(fieldName: string) {
    return !this.form.get(fieldName)?.valid && this.form.get(fieldName)?.dirty
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }


}
