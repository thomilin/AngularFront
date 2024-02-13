import {Component, OnInit} from '@angular/core';
import {ApiService} from "../service/api.service";
import {Tarea} from "../tarea";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  tarea: any[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.llenarListaTarea();
  }

  llenarListaTarea(){
    this.apiService.getListadeTareas().subscribe(tarea => {
      this.tarea = tarea;
    });
  }

  eliminarTarea(id:number){
    this.apiService.eliminarTarea(id).subscribe(dato => {
      console.log(dato);
      this.llenarListaTarea();
    });
  }


}
