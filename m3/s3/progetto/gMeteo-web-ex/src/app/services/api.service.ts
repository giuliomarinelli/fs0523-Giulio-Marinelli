import { iCityRes } from './../Models/api/i-city-res';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iCityDataOutput } from '../Models/api/i-city-data-output';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGeoDataByCityName(cityName: string) {

    return this.http.get<iCityRes[]>(`${environment.searchCityEndpoint}?q=${cityName}&limit=6&appid=${environment.apiKey}`)
      .pipe(map(resArr => resArr.map(res => {
        /*let localName: string = res.name
        try {
          if (res.local_names.it) localName = res.local_names.it
        } catch {
          (Error)
        }*/
        return {
          local_name: res.name,
          autocomplete: `${res.name}, ${res.state}, ${res.country}`,
          lat: res.lat,
          lon: res.lon
        } 
      }
      )))

  }



}
