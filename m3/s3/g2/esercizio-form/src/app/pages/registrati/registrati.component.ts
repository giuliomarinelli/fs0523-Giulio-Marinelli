import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrl: './registrati.component.scss'
})
export class RegistratiComponent {

  constructor(private fb: FormBuilder) { }

  form!: FormGroup

  ngOnInit() {
    this.form = this.fb.group(
      {
        nome: this.fb.control(null, [Validators.required]),
        cognome: this.fb.control(null, [Validators.required]),
        password: this.fb.control(null, [Validators.required]),
        confermaPassword: this.fb.control(null, [Validators.required]),
        genere: this.fb.control('0', [Validators.required]),
        immagineProfilo: this.fb.control(null, [Validators.required]),
        bio: this.fb.control(null, [Validators.required]),
        username: this.fb.control(null, [Validators.required]),
      }
    )
      setTimeout(() => console.log(this.isValid('nome')), 2000)
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
