import { Component } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { IMoto } from './Models/moto';
import { IMoto2 } from './Models/imoto2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fintaCrud';
  constructor(private dataManagerSvc: DataManagerService) {}
  arrMoto: IMoto[] = []
  getAll() {
    this.arrMoto = this.dataManagerSvc.getAll()
  }
  ngOnInit() {
    this.getAll()
  }
  addNew(moto: IMoto2) {
    this.dataManagerSvc.addNew(moto)
    this.getAll()
  }

  update(moto: IMoto2, id: number) {
    this.dataManagerSvc.update(moto, id)
    this.getAll()
  }

  delete(id: number) {
    this.dataManagerSvc.delete(id)
    this.getAll()
  }

  selectedMoto: IMoto = {
    id: -1,
    modello: '',
    cavalli: 0,
    prezzo: 0
  }

  selectMoto(moto: IMoto) {
    this.selectedMoto = moto
  }
}
