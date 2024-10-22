import { Component } from '@angular/core';
import { DepartmentService } from '../../service/department.service';
import { Pager } from '../../model/model';
import { DepartmentSummary } from '../../model/department.model';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from '../../util/paginator/paginator.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-departments',
  standalone: true,
  imports: [CommonModule, PaginatorComponent, RouterLink],
  templateUrl: './admin-departments.component.html',
  styleUrl: './admin-departments.component.scss'
})
export class AdminDepartmentsComponent {

  pager!: Pager<DepartmentSummary>;
  departments: DepartmentSummary[] = [];
  pageNumber: number = 0;
  pageSize: number = 10;

  constructor(private departmentService: DepartmentService) {

  }

  ngOnInit() {
    this.getDepartmentList();
  }

  changeEvent(pageNumber: number) {
      this.pageNumber = pageNumber;
      this.getDepartmentList();
  }

  getDepartmentList() {
    this.departmentService.getDepartmentList(this.pageNumber, this.pageSize)
      .subscribe(
        {
          next: (pager) => {
            this.pager = pager;
            this.departments = this.pager.data;
          }
        })
  }

}
