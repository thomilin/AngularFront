import {Component, OnInit} from '@angular/core';
import {ApiService} from "../service/api.service";
import {Tarea} from "../tarea";
import {Router} from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  tarea: any[] = [];

  constructor(private apiService: ApiService, private router:Router) {
  }

  ngOnInit() {
    this.llenarListaTarea();
  }

  llenarListaTarea(){
    this.apiService.getListadeTareas().subscribe(tarea => {
      this.tarea = tarea;
    });
  }

  editarTarea(id:number){
    this.router.navigate([""+id])
  }

  eliminarTarea(id: number) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar esta tarea?');
    if (confirmacion) {
      this.apiService.eliminarTarea(id).subscribe(
        () => {
          console.log('Tarea eliminada correctamente');
          this.llenarListaTarea();
        },
        error => {
          console.error('Error al eliminar la tarea:', error);
        }
      );
    }
  }


}
