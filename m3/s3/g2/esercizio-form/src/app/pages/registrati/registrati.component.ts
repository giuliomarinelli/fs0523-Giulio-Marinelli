import { Component, DoCheck } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators, ValidatorFn } from '@angular/forms';
import { Registrati } from '../../Models/registrati';
import { HttpService } from '../../http.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrl: './registrati.component.scss'
})
export class RegistratiComponent {

  constructor(private fb: FormBuilder, private httpSvc: HttpService) { }

  form!: FormGroup
  errorMsg!: Registrati
  ngDoCheck() {
    this.errorMsg = {
      nome: this.setInvalidMessages('nome'),
      cognome: this.setInvalidMessages('cognome'),
      username: this.setInvalidMessages('username'),
      immagineProfilo: this.setInvalidMessages('immagineProfilo'),
      genere: this.setInvalidMessages('genere'),
      bio: this.setInvalidMessages('bio'),
      password: this.setInvalidMessages('password'),
      confermaPassword: this.setInvalidMessages('confermaPassword')
    }
    console.log(this.errorMsg)
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
        if (field.errors['pattern'] && (fieldName === 'username')) errorMsg += 'Lo username non rispetta il formato richiesto. '
        if (field.errors['firstCapitalLetters']) errorMsg += 'I nomi devono iniziare sempre con una lettera maiuscola. '
        if (field.errors['unSupportedFormat']) errorMsg += 'Formato non supportato. '
        if (field.errors['genereUnSelected']) errorMsg += 'Devi selezionare un genere. '
      }

    }
    return errorMsg
  }

  ngOnInit() {
    this.form = this.fb.group(
      {
        nome: this.fb.control(null, [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z\s]*$/), this.firstCapitalLetters]),
        cognome: this.fb.control(null, [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z\s]*$/), this.firstCapitalLetters]),
        password: this.fb.control(null, [Validators.required, Validators.minLength(12), Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/)]),
        confermaPassword: this.fb.control(null, [Validators.required, Validators.minLength(12)]),
        genere: this.fb.control('0', [Validators.required]),
        immagineProfilo: this.fb.control(null, [this.unSupportedFormat]),
        bio: this.fb.control(null),
        username: this.fb.control(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/)])
      }
    )
    console.log(this.form)

  }



  unSupportedFormat = (formField: AbstractControl): ValidationErrors | null => {
    if (formField.value) {
      const supportedFormats = ['png', 'apng', 'avif', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'svg', 'webp'];
      let correctFormat = false;
      supportedFormats.forEach(el => {
        if (formField.value.endsWith(el) || formField.value.startsWith(`data:image/${el}`)) correctFormat = true;
      })
      if (!correctFormat) return { unSupportedFormat: true }
    }
    return null
  }



  genereUnSelected = (formField: AbstractControl): ValidationErrors | null => {
    if (formField.value === '0') return { genereUnSelected: true }
    return null
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
    console.log(this.form)
  }

  isValid(fieldName: string) {
    return this.form.get(fieldName)?.valid && this.form.get(fieldName)?.dirty
  }

  isInvalid(fieldName: string) {
    return !this.form.get(fieldName)?.valid && this.form.get(fieldName)?.dirty
  }

}
