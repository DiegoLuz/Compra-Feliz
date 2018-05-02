import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { CarrinhoModel } from '../shared/carrinho.model';

@Component({
  selector: 'checkout',
  styleUrls: ['./checkout.component.css'],
  templateUrl: './checkout.component.html'
})

export class CheckOutComponent {

  listaCarrinho: CarrinhoModel[] = [];
  valorTotalCompra: number = 0;
  load: boolean = false;

  @Input() set novoItemCarrinho(item: CarrinhoModel[]) {
    console.log(item);
    this.listaCarrinho = item;

    item.forEach(x => {
      this.valorTotalCompra = this.valorTotalCompra + x.valorTotal;
    });
  }

  @Output() itemRemovidoCarrinhoEmit: EventEmitter<CarrinhoModel> = new EventEmitter<CarrinhoModel>();

  constructor() {

  }

  removerItemCarrinho(index: number, itemLista: CarrinhoModel) {

    this.load = true;
    this.valorTotalCompra = this.valorTotalCompra - itemLista.valorTotal;

    this.listaCarrinho.splice(index, 1);

    setInterval(() => { this.load = false }, 1000);
  }

}
