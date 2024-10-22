import { Component } from '@angular/core';
import { PatientDetail } from '../../model/patient.model';
import { PatientService } from '../../service/patient.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pager } from '../../model/model';
import { PatientAppointmentSummary } from '../../model/appointment.model';
import { AppointmentService } from '../../service/appointment.service';
import { PaginatorComponent } from '../../util/paginator/paginator.component';

@Component({
  selector: 'app-admin-patient',
  standalone: true,
  imports: [CommonModule, PaginatorComponent, RouterLink],
  templateUrl: './admin-patient.component.html',
  styleUrl: './admin-patient.component.scss'
})
export class AdminPatientComponent {


  patient!: PatientDetail;
  pager!: Pager<PatientAppointmentSummary>;
  pageNumber: number = 0;
  appointments: PatientAppointmentSummary[] = [];
  appointmentStatus: string = "booked";

  constructor(private patientService: PatientService, private appointmentService: AppointmentService, private route: ActivatedRoute) {
    this.getPatientDetail();
    this.getAppoinments();
  }

  getPatientDetail() {
    let id = this.route.snapshot.paramMap.get("id");
    this.patientService.getPatientDetail(id).subscribe({
      next: patientDetail => {
        this.patient = patientDetail;
      }
    })
  }

  getAppoinments() { 
    let id = this.route.snapshot.paramMap.get("id");
    if(this.appointmentStatus == "booked") {
      this.appointmentService.getBookedAppointmentsForPatient(id).subscribe({
        next: pager => {
          this.pager = pager;
          this.appointments = pager.data;
        }
      })
    }else if(this.appointmentStatus == "finished") {
      this.appointmentService.getFinishedAppointmentsForPatient(id).subscribe({
        next: pager => {
          this.pager = pager;
          this.appointments = pager.data;
        }
      })
    }else{
      this.appointmentService.getCanceledAppointmentsForPatient(id).subscribe({
        next: pager => {
          this.pager = pager;
          this.appointments = pager.data;
        }
      })
    }
  }

  switchTab(status: string) {
    this.appointmentStatus = status;
    this.getAppoinments();
  }



}
