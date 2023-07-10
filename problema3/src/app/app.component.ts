import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'problema3';

  id:number = 0;
  id_modificado:number = 0;
  codigo:string = '';
  descripcion:string = '';
  precio:string = '';
  articulos:any[] = [];

  agregar(){
    this.articulos.push({
      id: this.id++,
      codigo: this.codigo,
      descripcion: this.descripcion,
      precio: this.precio
    });

    this.codigo = 'Código';
    this.descripcion = '';
    this.precio = 'Precio';
  }

  updateList(updatedList:any){
    this.articulos = updatedList;
  }

  selectArticulo(articulo:any){
    this.id_modificado = articulo[0].id;
    this.codigo = articulo[0].codigo;
    this.descripcion = articulo[0].descripcion;
    this.precio = articulo[0].precio;
  }

  modificarArticulo(){
    let articuloSeleccionado = this.articulos.filter(articulo => articulo.id === this.id_modificado);
    const index = this.articulos.findIndex(articulo => articulo.id === articuloSeleccionado[0].id);
    console.log(index);
    
    const modificacionesArticulo = {
      id:this.id_modificado,
      codigo: this.codigo,
      descripcion: this.descripcion,
      precio: this.precio
    };

    articuloSeleccionado[0] = modificacionesArticulo;
    this.articulos[index] = articuloSeleccionado[0];

    this.codigo = 'Código';
    this.descripcion = '';
    this.precio = 'Precio';
  }
}
