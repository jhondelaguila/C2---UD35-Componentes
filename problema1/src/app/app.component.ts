import { Component } from '@angular/core';
import { ClienteComponent } from './clientes/cliente/cliente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'problema1'
  nombre: string = '';
  cif: string = '';
  dir: string = '';
  grupo: string = '';
  id:number = 0;
  clientes: any[] = [];

  constructor(){}

  guardar():void {
    this.id += 1;
    let newCliente = {
      'id': this.id,
      'nombre': this.nombre,
      'cif': this.cif,
      'direccion': this.dir,
      'grupo': this.grupo
    }
    this.clientes.push(newCliente);

    this.nombre = '';
    this.cif = '';
    this.dir = '';
    this.grupo = 'Grupo';
  }

  updateList(list:any){
    this.clientes = list;
  }
}
