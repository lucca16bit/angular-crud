import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: CoursesService) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(data => console.log(data), error => this.onError());
  }

  onCancel() {

  }

  private onError() {
    this._snackBar.open('Erro ao salvar curso.', '', { duration: 5000});
  }
}
