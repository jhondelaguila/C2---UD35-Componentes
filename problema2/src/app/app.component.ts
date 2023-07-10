import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'problema2';

  nombre:string = '';
  email:string = '';
  mensaje:string = '';
  respuesta:string = '';
  clientes: any = [];

  enviar(){
    this.clientes.push({
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje,
      respuesta: this.respuesta
    });

    this.nombre = '';
    this.email = '';
    this.mensaje = '';
    this.respuesta = '';
  }
}
