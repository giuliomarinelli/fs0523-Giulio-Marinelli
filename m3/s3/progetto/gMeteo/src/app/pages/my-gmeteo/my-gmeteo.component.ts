import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { iWeatherFiltered } from '../../Models/api/weather/i-weather-filtered';
import { LanguageService } from '../../services/language.service';
import { WeathersIconsManagerService } from '../../services/weathers-icons-manager.service';

@Component({
  selector: 'app-my-gmeteo',
  templateUrl: './my-gmeteo.component.html',
  styleUrl: './my-gmeteo.component.scss'
})
export class MyGmeteoComponent {
  constructor(private apiSvc: ApiService, private langSvc: LanguageService, private icoSvc: WeathersIconsManagerService) { }
  wData!: iWeatherFiltered | null
  ngOnInit() {
    this.apiSvc.wData$.subscribe(wData => {
      if (wData) {
        wData.city.sunrise *= 1000
        wData.city.sunset *= 1000
      }
      this.wData = wData
  })
}
getIconPath(selector: string): string {
  return '../../../' + this.icoSvc.getPath(selector)
}
firstCapitalLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

}
