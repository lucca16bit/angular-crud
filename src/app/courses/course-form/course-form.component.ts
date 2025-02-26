import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';
import { AppMaterialModule } from './../../shared/app-material/app-material.module';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [AppMaterialModule, ReactiveFormsModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);

  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private location: Location,
    private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(data => this.onSucess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this._snackBar.open('Curso salvo com sucesso!', '', { duration: 5000});
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar curso.', '', { duration: 5000});
  }
}
