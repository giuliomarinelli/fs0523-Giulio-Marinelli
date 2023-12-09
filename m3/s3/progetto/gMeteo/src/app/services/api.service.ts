import { iCityRes } from '../Models/api/city/i-city-res';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, map } from 'rxjs';
import { iCoord } from '../Models/api/weather/i-coord';
import { iWeatherRes } from '../Models/api/weather/i-weather-res';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGeoDataByCityName(cityName: string, lang: string) {

    return this.http.get<iCityRes[]>(`${environment.searchCityEndpoint}?q=${cityName}&limit=5&appid=${environment.apiKey}`)
      .pipe(map(resArr => resArr.map(res => {
        let localName: string = res.name // default: en
        try {
          if (res.local_names.it && lang === 'it') localName = res.local_names.it
        } catch {
          (Error)
        }
        return {
          local_name: localName,
          autocomplete: `${localName}, ${res.state}, ${res.country}`,
          lat: res.lat,
          lon: res.lon
        }
      }
      )))

  }

  get5d3hWeatherForecast(coord: iCoord, lang: string) {
    return this.http.get<iWeatherRes>(`${environment._5d3hForecastEndpoint}?lat=${coord.lat}&lon=${coord.lon}&apikey=${environment.apiKey}&lang=${lang}`)
  }

}
