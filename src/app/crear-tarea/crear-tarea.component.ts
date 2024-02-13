import {Component, OnInit} from '@angular/core';
import {Tarea} from "../tarea";
import {ApiService} from "../service/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrl: './crear-tarea.component.css'
})
export class CrearTareaComponent implements OnInit {

  tarea : Tarea = new Tarea();

  constructor(private apiService:ApiService,private router:Router) {
  }

  ngOnInit() {
    console.log(this.tarea);
  }

  guardarTarea(){
    this.apiService.crearTarea(this.tarea).subscribe(dato => {
      console.log(dato);
      this.devolverALaListaTareas();
    },error => console.log(error));
  }

  devolverALaListaTareas(){
    this.router.navigate(['/home'])
  }

  onSubmit()  {
    this.guardarTarea();
    console.log("Tarea creada correctamente", this.tarea);
  }


}
