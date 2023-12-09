import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';


@NgModule({
  declarations: [
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzAutocompleteModule
  ],
  exports: [
    AutocompleteComponent
  ]
})
export class AutocompleteModule { }
