import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
  @Input() listaArticulos:any[] = [];
  @Output() updatedList = new EventEmitter();
  @Output() articuloSeleccionado = new EventEmitter();

  eliminarArticulo(id_articulo:number){
    let newLista = this.listaArticulos.filter(articulo => articulo.id !== id_articulo);
    this.listaArticulos = newLista;
    this.updatedList.emit(this.listaArticulos);
  }

  selectArticulo(id_articulo:number){
    let articulo = this.listaArticulos.filter(articulo => articulo.id === id_articulo);
    this.articuloSeleccionado.emit(articulo);
  }
}
