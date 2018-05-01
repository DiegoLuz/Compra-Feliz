import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { environment } from '../../../environments/environment';
import { ProdutoModel } from './produto.model';
import { Produtos } from './moc-produtos';
import { DescricaoProdutoModel } from './descricao-produto.model';
import { DescricaoProdutoMoc } from './moc-descricao-produto';



@Injectable()
export class CompraFelizService {

  constructor() {

  }

  public buscarProdutos(): Observable<ProdutoModel[]> {

    return Observable.of(Produtos);
  }

  public buscarProdutoAutoComplete(valor: string): Observable<ProdutoModel[]> {

    let resultado = Produtos.filter(x =>
      x.nome.toLowerCase().indexOf(valor.toLowerCase()) !== -1
    );

    return Observable.of(resultado);
  }

  public buscarProdutoPorId(idProduto: number): Observable<ProdutoModel> {
    let resultado = Produtos.find(x =>
      x.id == idProduto
    );

    return Observable.of(resultado);
  }

  public buscarDescricaoProduto(idProduto: number): Observable<DescricaoProdutoModel> {

    let resultado = DescricaoProdutoMoc.find(x =>
      x.idProduto == idProduto
    );

    console.log(resultado);

    return Observable.of(resultado);

  }
}
