import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';

import { ProdutoModel } from '../shared/produto.model';
import { CompraFelizService } from '../shared/compra-feliz.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'lista-produto',
  styleUrls: ['./lista-produto.component.css'],
  templateUrl: './lista-produto.component.html',
  providers: [CompraFelizService]
})

export class ListaProdutoComponent implements OnInit {

  listaProduto: ProdutoModel[] = [];

  @ViewChild('modalComprar') modalComprar: ModalComponent;

  @Output() exibeDetalhesEvent: EventEmitter<ProdutoModel> = new EventEmitter<ProdutoModel>();
  @Input() set produtoSelecionado(produto: ProdutoModel) {
    

    if (produto == null) {
      this.buscarListaProdutos();
    }
    else {
      this.listaProduto = [];
      this.listaProduto.push(produto);
    }

  }

  constructor(private compraFelizService: CompraFelizService ) {

  }

  ngOnInit() {
 
  }

  buscarListaProdutos() {

    this.compraFelizService.buscarProdutos()
      .subscribe(x => {
        this.listaProduto = x;
      });
  }

  selecionaProduto(item: ProdutoModel) {
    this.exibeDetalhesEvent.emit(item);
  }

  abrirModal() {
    this.modalComprar.abrirModal("Comprar Produto", "", true);
  }

}

