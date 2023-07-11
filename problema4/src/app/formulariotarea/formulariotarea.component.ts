import { Component } from '@angular/core';

@Component({
  selector: 'app-formulariotarea',
  templateUrl: './formulariotarea.component.html',
  styleUrls: ['./formulariotarea.component.css']
})
export class FormulariotareaComponent {
  titulo:string = '';
  descripcion:string = '';
  tareas:any = [];
  id:number = 0;

  agregar(){
    this.tareas.push(
      {
        id: this.id++,
        titulo: this.titulo,
        descripcion: this.descripcion,
        completado: true
      }
    );

    this.titulo = '';
    this.descripcion = '';
  }

  updateList(updatedList:any){
    this.tareas = updatedList;
  }
}
