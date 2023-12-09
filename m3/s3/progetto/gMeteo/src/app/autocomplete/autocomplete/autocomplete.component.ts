import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { iCityData } from '../../Models/api/city/i-city-data';
import { FormControl, FormBuilder } from '@angular/forms';
import { iWeatherRes } from '../../Models/api/weather/i-weather-res';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent {
  inputValue?: string;
  options: string[] = []
  res!: iCityData[]
  lang!: string

  constructor(private fb: FormBuilder, private apiSvc: ApiService, private langSvc: LanguageService) { }

  input: FormControl = this.fb.control(null)

  ngOnInit() {
    this.langSvc.language$.subscribe(lang => this.lang = lang)
  }

  onInput(event: Event): void {
    if (this.input.value) {
      const api = this.apiSvc.getGeoDataByCityName(this.input.value, this.lang).subscribe(res => {
        if (res.length !== 0) {
          this.res = res
          this.options = res.map(el => el.autocomplete)
        } else {
          this.options = [`${this.input.value}`]
        }
      })
    }
  }

  obj!: iWeatherRes

  @ViewChild('auto') element!: any

  actOnceWhenItemSelected: boolean = false





  ngDoCheck() {
    if (this.element) {
      console.log(this.element)
      if (this.element.activeItem?.selected) this.act(this.element.activeItem.nzValue)
      if (!this.element.activeItem || !this.element.activeItem?.selected) this.actOnceWhenItemSelected = false
    }
  }

  act(match: string) {
    if (!this.actOnceWhenItemSelected)
      if (this.res) {
        const selectedRes: iCityData | undefined = this.res.find(r => r.autocomplete === match)
        if (selectedRes) {
          this.apiSvc.get5d3hWeatherForecast({ lat: selectedRes.lat, lon: selectedRes.lon }, this.lang).subscribe(obj => this.obj = obj)
        }
        this.actOnceWhenItemSelected = true
      }
  }

}





