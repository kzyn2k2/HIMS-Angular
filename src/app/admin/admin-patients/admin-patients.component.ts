import { Component } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { PatientSummary } from '../../model/patient.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PaginatorComponent } from '../../util/paginator/paginator.component';
import { Pager } from '../../model/model';

@Component({
  selector: 'app-admin-patients',
  standalone: true,
  imports: [CommonModule, RouterLink, PaginatorComponent],
  templateUrl: './admin-patients.component.html',
  styleUrl: './admin-patients.component.scss'
})
export class AdminPatientsComponent {

  pageNumber: number = 0;
  pageSize: number = 10;
  pager!: Pager<PatientSummary>;
  patients: PatientSummary[] = [];

  constructor(private patientService: PatientService) {

  }


  ngOnInit(): void {
    this.getPatientSummaries();
  }

  getPatientSummaries() {
    this.patientService.getPatientSummaries(this.pageNumber, this.pageSize).subscribe({
      next: (pager) => {
        this.pager = pager;
        this.patients = this.pager.data;
      }
    })
  }

 changeEvent(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getPatientSummaries();
  }

}
