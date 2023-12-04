import { Component } from '@angular/core';
import { DataManagerService } from './data-manager.service';
import { IProducts } from './Models/iproducts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private dataManagerSvc: DataManagerService) {}
}
