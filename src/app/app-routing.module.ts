import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CrearTareaComponent} from "./crear-tarea/crear-tarea.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',redirectTo:'home', pathMatch: "full" },
  { path: 'crear-tarea', component: CrearTareaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
