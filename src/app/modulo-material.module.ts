import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatOptionModule
} from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule],

  exports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule],

  declarations: [],

})
export class ModuloMaterialModule { }
