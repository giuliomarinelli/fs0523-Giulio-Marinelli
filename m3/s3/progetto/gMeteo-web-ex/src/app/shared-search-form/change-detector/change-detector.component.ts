import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { iCityDataOutput } from '../../Models/api/i-city-data-output';

@Component({
  selector: 'app-change-detector',
  templateUrl: './change-detector.component.html',
  styleUrl: './change-detector.component.scss'
})
export class ChangeDetectorComponent {
  constructor(private apiSvc: ApiService) { }
  lastValue: string | null = ''
  @Input() value: string | null = null
  @Output() onChange = new EventEmitter<boolean>();
  ngDoCheck() {
    if (this.value !== this.lastValue) {
      this.lastValue = this.value
      this.onChange.emit(true)
    }
  }
}

