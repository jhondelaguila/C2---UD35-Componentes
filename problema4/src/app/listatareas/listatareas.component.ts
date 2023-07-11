import { Component,Input,OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.css']
})
export class ListatareasComponent implements OnInit{
  @Input() listaTareas:any[] = [];
  @Output() updatedList = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
  }

  eliminarTarea(id_tarea:number){
    let newLista = this.listaTareas.filter(tarea => tarea.id !== id_tarea);
    this.listaTareas = newLista;
    this.updatedList.emit(this.listaTareas);
  }

  completado(completado:boolean):boolean{
    return !completado;
  }
}
