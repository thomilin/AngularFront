import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tarea} from "../tarea";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Esta url obtiene el listado de todas las tareas
  private urlApi = 'http://localhost:8080/tarea/lista'
  private urlCrearTarea = 'http://localhost:8080/tarea'

  constructor(private httpClient: HttpClient) { }

  //Sirve para obtener lista de Tareas
  public getListadeTareas(): Observable<any> {
    return this.httpClient.get<any>(this.urlApi);
  }

  //Este metodo sirve para crear una Tarea
  crearTarea(tarea: Tarea): Observable<any> {
    return this.httpClient.post<any>(this.urlCrearTarea, tarea);
  }

  eliminarTarea(id: number): Observable<any>{
    return this.httpClient.delete(`${this.urlCrearTarea}/${id}`);
  }

  put(id: number, tarea: Tarea) {

  }

  obtenerTarea(id: number): Observable<Tarea> {
    return this.httpClient.get<Tarea>(this.urlCrearTarea+id);
  }
}
