import { Component } from '@angular/core';
import { DataManagerService } from '../../data-manager.service';
import { IProducts } from '../../Models/iproducts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: IProducts[] = []
  constructor(private dataManagerSvc: DataManagerService) { }
  ngOnInit() {
    this.dataManagerSvc.getAll().subscribe(res => {
      this.products = res.products
      console.log(this.products)
    })
  }
}
