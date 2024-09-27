import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { StudentsService } from './services/students.service';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tutoriais';

  // musicas: Music[] = []
  listas$ = new Observable<Student[]>();

  // form
  nome = '';
  email='';
  dataNascimento = '';
  sexo = ''

  constructor(private studentService: StudentsService){
    this.listStudentCadastradas();
  }

  listStudentCadastradas(){
    // this.musicService.listStudent()
    //   .subscribe(musicas => this.musicas = musicas)

  }
}