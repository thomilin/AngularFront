import {Component, OnInit} from '@angular/core';
import {Tarea} from "../tarea";
import {ActivatedRoute, Router} from "@angular/router";
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
  constructor(private service:ApiService, private actRoute:ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      const id = +params['id'];
      this.obtenerTarea(id);
    });
  }


  editarTarea() {
    this.service.editarTarea(this.tarea.id, this.tarea).subscribe(
      () => {
        console.log('Tarea editada correctamente');
        this.router.navigate(['/home']);
      },
    );
  }

  obtenerTarea(id: number) {
    this.service.obtenerTarea(id).subscribe(
      tarea => this.tarea = tarea,
      error => console.error('Error al obtener la tarea:', error)
    );
  }

}
