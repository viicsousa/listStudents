import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Student } from '../../models/student.model';

@Injectable({
  providedIn: 'root'  // Isso deve estar aqui para que o serviço seja disponibilizado na aplicação
})
export class StudentsService {
  private url = environment.api;
  private _httpCliente: HttpClient;
  constructor( httpClient: HttpClient) {
      this._httpCliente = httpClient;
  }

  listStudent() {
    return this._httpCliente.get<Student[]>(this.url + '/list');
  }
}
