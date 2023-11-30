import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMoto } from '../../Models/moto';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.scss'
})
export class TabellaComponent {
  @Input() arrMoto!: IMoto[]
  @Output() onSelectMoto: EventEmitter<IMoto> = new EventEmitter()
  editMoto(moto: IMoto) {
    this.onSelectMoto.emit(moto)
  }
  @Output() onDeleteMoto: EventEmitter <number> = new EventEmitter()
  delete(id: number) {
    this.onDeleteMoto.emit(id)
  }
}
