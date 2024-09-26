import { Component } from '@angular/core';
import { StudentsService } from './services/students.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigi de styleUrl para styleUrls
})
export class AppComponent {
  title = 'listStudents';
  listas: Student[] = [];
  private _student : StudentsService;
  constructor(studentService: StudentsService) 
  
  { this._student = studentService;
    this.listaCadastrada(); // Chame o método no construtor
  }

  listaCadastrada() {
    this._student.listStudent()
      .subscribe(listas => this.listas = listas);
  }
}
