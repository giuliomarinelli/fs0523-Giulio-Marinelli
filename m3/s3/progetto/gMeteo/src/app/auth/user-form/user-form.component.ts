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
  ngDoCheck() {
    this.errorMsg = {
      name: this.setInvalidMessages('name'),
      surname: this.setInvalidMessages('surname'),
      email: this.setInvalidMessages('email'),
      dateOfBirth: this.setInvalidMessages('immagineProfilo'),
      gender: this.setInvalidMessages('genere'),
      password: this.setInvalidMessages('password'),
      confirmPassword: this.setInvalidMessages('confirmPassword'),
      phoneNumber: this.setInvalidMessages('phoneNumber')
    }

  }

  setInvalidMessages(fieldName: string): string {
    const field: AbstractControl | null = this.form.get(fieldName)
    let errorMsg = ''
    if (field) {
      if (field.errors) {
        if (field.errors['required']) errorMsg += 'Campo vuoto. '
        if (field.errors['minlength'] && (fieldName === 'nome' || fieldName === 'cognome')) errorMsg += 'Il campo deve avere almeno 2 caratteri. '
        if (field.errors['minlength'] && (fieldName === 'password' || fieldName === 'confermaPassword')) errorMsg += 'Il campo deve avere almeno 12 caratteri. '
        if (field.errors['pattern'] && (fieldName === 'nome' || fieldName === 'cognome')) errorMsg += 'Nome e cognome possono contenere sololettere dell\'alfabeto. '
        if (field.errors['pattern'] && (fieldName === 'password')) errorMsg += 'La password non rispetta il formato richiesto. '
        if (field.errors['pattern'] && (fieldName === 'email')) errorMsg += 'Lo username non rispetta il formato richiesto. '
        if (field.errors['firstCapitalLetters']) errorMsg += 'I nomi devono iniziare sempre con una lettera maiuscola. '
        if (field.errors['unSupportedFormat']) errorMsg += 'Formato non supportato. '
        if (field.errors['genereUnSelected']) errorMsg += 'Devi selezionare un genere. '
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
        password: this.fb.control(null, [Validators.required, Validators.minLength(12), Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/)]),
        confirmPassword: this.fb.control(null, [Validators.required, Validators.minLength(12)]),
        gender: this.fb.control('0', [Validators.required]),
        phoneNumber: this.fb.control(null),
        dateOfBirth: this.fb.control(null),
        email: this.fb.control(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/)])
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

  submit() {
    delete this.form.value.controllaPassword
    this.authSvc.signUp(this.form.value).subscribe((res: iAuthData) => console.log(res))
  }

  isValid(fieldName: string) {
    return this.form.get(fieldName)?.valid && this.form.get(fieldName)?.dirty
  }

  isInvalid(fieldName: string) {
    return !this.form.get(fieldName)?.valid && this.form.get(fieldName)?.dirty
  }

}
