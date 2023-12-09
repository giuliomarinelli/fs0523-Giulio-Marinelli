import { iIconMap } from './../Models/i-icon-map';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeathersIconsManagerService {

  constructor() { }

  commonPath: string = 'assets/weather-library/'

  iconsMap: iIconMap[] = [
    {
      selector: ['01d'],
      path: `${this.commonPath}01d.gif`
    },
    {
      selector: ['01n'],
      path: `${this.commonPath}01n.gif`
    },
    {
      selector: ['02d'],
      path: `${this.commonPath}02d.gif`
    },
    {
      selector: ['02n'],
      path: `${this.commonPath}02n.gif`
    },
    {
      selector: ['03d', '03n', '04d', '04n'],
      path: `${this.commonPath}03.gif`
    },
    {
      selector: ['09d', '09n'],
      path: `${this.commonPath}09.gif`
    },
    {
      selector: ['10d'],
      path: `${this.commonPath}10d.gif`
    },
    {
      selector: ['10n'],
      path: `${this.commonPath}10n.gif`
    },
    {
      selector: ['11d', '11n'],
      path: `${this.commonPath}11.gif`
    },
    {
      selector: ['13d', '13n'],
      path: `${this.commonPath}13.gif`
    },
    {
      selector: ['50d'],
      path: `${this.commonPath}50d.gif`
    },
    {
      selector: ['50n'],
      path: `${this.commonPath}50n.gif`
    }
  ]

  getPath(selector: string): string {
    const ind = this.iconsMap.findIndex((el: iIconMap) => el.selector.includes(selector))
    return this.iconsMap[ind].path
  }

}
