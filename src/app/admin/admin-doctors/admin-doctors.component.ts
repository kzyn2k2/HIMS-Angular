import { Component } from '@angular/core';
import { PaginatorComponent } from '../../util/paginator/paginator.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pager } from '../../model/model';
import { DoctorSummary } from '../../model/doctor.model';
import { DoctorService } from '../../service/doctor.service';

@Component({
  selector: 'app-admin-doctors',
  standalone: true,
  imports: [PaginatorComponent, RouterLink, CommonModule],
  templateUrl: './admin-doctors.component.html',
  styleUrl: './admin-doctors.component.scss'
})
export class AdminDoctorsComponent {

  pager!: Pager<DoctorSummary>;
  pageNumber: number = 0;
  pageSize: number = 10;
  doctors: DoctorSummary[] = [];

  constructor(private doctorService: DoctorService) {

  }

  ngOnInit() {
    this.getDoctorSummaries();
  }

  changeEvent(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getDoctorSummaries();
  }

  getDoctorSummaries() {
    this.doctorService.getDoctorSummaries(this.pageNumber, this.pageSize).subscribe({
      next: res => {
        this.pager = res;
        this.doctors = this.pager.data;
      }
    })
  }

}
