import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutComponent } from './checkout.component';
import { HeaderModule } from '../header/header.module';
import { ModuloMaterialModule } from '../../modulo-material.module';

@NgModule({
  imports: [CommonModule, HeaderModule, ModuloMaterialModule],

  exports: [CheckOutComponent],

  declarations: [CheckOutComponent],

})
export class CheckOutModule { }
