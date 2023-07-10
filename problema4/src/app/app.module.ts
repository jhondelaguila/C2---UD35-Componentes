import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListatareasComponent } from './listatareas/listatareas.component';
import { FormulariotareaComponent } from './formulariotarea/formulariotarea.component';

@NgModule({
  declarations: [
    AppComponent,
    ListatareasComponent,
    FormulariotareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
