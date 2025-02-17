import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../models/course';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [
    AppMaterialModule
  ],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit {

  courses: Course[] = [];
  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
