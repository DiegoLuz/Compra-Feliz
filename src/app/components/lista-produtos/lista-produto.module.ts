import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule } from '@angular/material';

import { ListaProdutoComponent } from './lista-produto.component';
import { ModalModule } from '../modal/modal.module';


@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatCardModule, MatButtonModule, ModalModule],

  exports: [ListaProdutoComponent],

  declarations: [ListaProdutoComponent],

})
export class ListaProdutoModule { }
