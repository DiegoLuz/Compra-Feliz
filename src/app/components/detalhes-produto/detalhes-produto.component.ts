import { Component, Input } from '@angular/core';

import { ProdutoModel } from '../shared/produto.model';
import { DescricaoProdutoModel } from '../shared/descricao-produto.model';

import { CompraFelizService } from '../shared/compra-feliz.service';

@Component({
  selector: 'detalhes-produto',
  styleUrls: ['./detalhes-produto.component.css'],
  templateUrl: './detalhes-produto.component.html',
  providers: [CompraFelizService]

})

export class DetalhesProdutoComponent {

  _produtoSelecionado: ProdutoModel = new ProdutoModel()
  descricaoProduto: DescricaoProdutoModel = new DescricaoProdutoModel();
  slideIndex: number = 0;

  @Input() set produtoSelecionado(valor: ProdutoModel) {
    this.buscarDetalheProduto(valor.id);
    this._produtoSelecionado = valor;
  }

  constructor(private compraFelizService: CompraFelizService) {

  }

  buscarDetalheProduto(idProduto: number) {
    this.compraFelizService.buscarDescricaoProduto(idProduto)
      .subscribe(x => {
        this.descricaoProduto = x;
      });
  }

  selecionarImagem(valor: number) {
    this.slideIndex = this.mod(valor, this.descricaoProduto.fotos.length);
  }

  alterarDiv(valor: number) {
    
    this.slideIndex = this.mod(this.slideIndex + valor, this.descricaoProduto.fotos.length);

  }

  mod(a: number, b: number): number {
    var mod: number = a - ((Math.floor(a / b)) * b);

    return mod;
  }
}

