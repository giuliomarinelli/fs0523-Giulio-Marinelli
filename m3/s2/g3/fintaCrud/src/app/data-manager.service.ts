import { Injectable } from '@angular/core';
import { IMoto } from './Models/moto';
import { IMoto2 } from './Models/imoto2';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  arrMoto: IMoto[] = [
    {
      id: 1,
      modello: 'Kawasaki Ninja 400',
      cavalli: 45,
      prezzo: 7080
    },
    {
      id: 2,
      modello: 'Kawasaki Ninja ZX-4RR',
      cavalli: 80,
      prezzo: 9000
    },
    {
      id: 3,
      modello: 'Kawasaki Ninja ZX-6R',
      cavalli: 132,
      prezzo: 13900
    }
  ]

  getAll() {
    return this.arrMoto
  }

  addNew(moto: IMoto2) {
    this.arrMoto.push({ ...moto, id: this.arrMoto.length + 1 })
  }

  update(moto: IMoto2, id: number) {
    const index = this.arrMoto.findIndex(m => m.id === id)
    this.arrMoto.splice(index, 1, { ...moto, id })
  }

  delete(id: number) {
    const index = this.arrMoto.findIndex(m => m.id === id)
    this.arrMoto.splice(index, 1)
  }


  constructor() { }
}
