import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentSummary } from '../../model/department.model';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-admin-appointment-register',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './admin-appointment-register.component.html',
  styleUrl: './admin-appointment-register.component.scss'
})
export class AdminAppointmentRegisterComponent {

  departments: DepartmentSummary[] = [];
  patientId: any;
  selected: boolean = false;

  constructor(private departmentService: DepartmentService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.getDepartments();
    this.checkRouting();
    this.patientId = this.route.snapshot.paramMap.get("id");
  }

  ngOnChanges() {
    this.checkRouting();
  }

  checkRouting() {
    if(this.router.url.includes("department")) {
      this.selected = true;
    }
  }

  getDepartments() {
    this.departmentService.getDepartmentsForBooking().subscribe({
      next: res => {
        this.departments = res;
      },
      error: err => {
        this.router.navigate(['/error']);
      }
    })
  }

  selectDepartment() {
    this.selected = true;
  }

}
