import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  @Input() listaClientes: any[] = [];
  @Output() updatedList = new EventEmitter();

  constructor(){}

  eliminarCliente(id_cliente:string){
    let newLista = this.listaClientes.filter(cliente => cliente.id !== id_cliente);
    this.listaClientes = newLista;
    this.updatedList.emit(this.listaClientes);
  }
}
