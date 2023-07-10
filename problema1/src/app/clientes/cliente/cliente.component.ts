import { Component, Input,Inject } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  @Input() listaClientes: any[] = [];
  constructor(){}

  eliminarCliente(id_cliente:string){
    let newLista = this.listaClientes.filter(cliente => cliente.id !== id_cliente);
    this.listaClientes = newLista;
  }
}
