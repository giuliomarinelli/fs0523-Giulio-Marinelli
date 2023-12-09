import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always' } }
  ],
  declarations: [
    AutocompleteComponent,
    ChangeDetectorComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    AutocompleteComponent,
    ChangeDetectorComponent
  ]
})
export class SharedSearchFormModule { }
