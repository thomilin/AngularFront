import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, withFetch } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import {FormsModule} from "@angular/forms";
import { EditarTareaComponent } from './editar-tarea/editar-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearTareaComponent,
    EditarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
