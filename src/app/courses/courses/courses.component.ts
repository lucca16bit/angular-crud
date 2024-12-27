import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Course } from '../models/course';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'Front-End'}
  ];
  displayedColumns = ['name', 'category'];


  constructor() {

  }

  ngOnInit(): void {

  }
}
