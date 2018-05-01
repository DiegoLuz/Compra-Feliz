import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhesProdutoComponent } from './detalhes-produto.component';
import { ModuloMaterialModule } from '../../modulo-material.module';

@NgModule({
  imports: [CommonModule, ModuloMaterialModule],

  exports: [DetalhesProdutoComponent],

  declarations: [DetalhesProdutoComponent],

})
export class DetalheProdutoModule { }
