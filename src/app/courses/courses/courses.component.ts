import { CoursesService } from './../services/courses.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Course } from '../models/course';
import { AppMaterialModule } from "../../shared/app-material/app-material.module";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list();
  }

  ngOnInit(): void {

  }
}
