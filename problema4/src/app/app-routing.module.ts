import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariotareaComponent } from './formulariotarea/formulariotarea.component';
import { ListatareasComponent } from './listatareas/listatareas.component';

const routes: Routes = [
  {
    path: 'formulario',
    component: FormulariotareaComponent
  },
  {
    path: 'lista',
    component: ListatareasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
