import { IMoto2 } from './../../Models/imoto2';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() newMoto: IMoto2 = {
    modello: '',
    cavalli: 0,
    prezzo: 1
  }

  create() {
    this.onAddMoto.emit(this.newMoto)
    this.newMoto = {
      modello: '',
      cavalli: 0,
      prezzo: 0
    }
  }

  @Output() onAddMoto: EventEmitter<IMoto2> = new EventEmitter()

}
