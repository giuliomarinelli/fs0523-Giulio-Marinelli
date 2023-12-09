import { iCityDataOutput } from './../../Models/api/i-city-data-output';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})

export class AutocompleteComponent {
  constructor(private fb: FormBuilder, private apiSvc: ApiService) { }
  input = this.fb.control(null)
  res!: iCityDataOutput[]
  options: string[] = []
  ngOnInit() {
    console.log(this.input)
  }
  setAutocomplete(event: boolean) {
    if (!this.input.value) this.options = []
    if (this.input.value) {
      this.apiSvc.getGeoDataByCityName(this.input.value).subscribe(res => {
        this.res = res
        this.options = res.map(el => el.autocomplete)
      })
    }
  }

}
