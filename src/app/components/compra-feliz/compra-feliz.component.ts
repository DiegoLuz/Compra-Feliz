import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../shared/produto.model';

@Component({
  selector: 'compra-feliz',
  styleUrls: ['./compra-feliz.component.css'],
  templateUrl: './compra-feliz.compont.html'
})

export class CompraFelizComponent implements OnInit {

  tela: string = "";
  produtoSelecionado: ProdutoModel = null;

  constructor() {

  }

  ngOnInit() {
    this.tela = "lista";
  }

  exibeDetalhesProduto(produto: ProdutoModel) {
    this.tela = "detalhes";
    this.produtoSelecionado = produto;
  }

  selecionadaProdutoFiltro(produto: ProdutoModel) {
    this.tela = "lista";
    this.produtoSelecionado = produto;
  }

}

