import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private apiSvc: ApiService) { }
  getDataByCityNameSubscription!: Subscription
  ngOnInit() {
    const getDataByCiytiNameObs: Observable<any> = this.apiSvc.getGeoDataByCityName('Roma')
    this.getDataByCityNameSubscription = getDataByCiytiNameObs.subscribe(data => console.log(data))
  }
  ngOnDestroy() {
    this.getDataByCityNameSubscription.unsubscribe()
  }
}
