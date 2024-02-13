import {Component, OnInit} from '@angular/core';
import {Tarea} from "../tarea";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrl: './editar-tarea.component.css'
})
export class EditarTareaComponent implements OnInit {

  tarea: Tarea = {
    id: 0,
    nombre: "",
    completado: true
  }
  constructor(private service:ApiService, private actRoute:ActivatedRoute) {
    this.actRoute.params.subscribe((dato)=>{
      this.editar(dato['id']);
    })
  }

  ngOnInit() {
  }

  editar(id: number){
    this.service.put(id, this.tarea);
  }

  obtenerTarea(id:number){
    this.service.obtenerTarea(id).subscribe((dato)=>{
      this.tarea = dato;
    })
  }

}
