import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../service/doctor.service';
import { DoctorDepartmentInfo } from '../../model/doctor.model';
import { AppointmentService } from '../../service/appointment.service';
import { AppointmentBooking } from '../../model/appointment.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-appointment-register-department',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-appointment-register-department.component.html',
  styleUrl: './admin-appointment-register-department.component.scss'
})
export class AdminAppointmentRegisterDepartmentComponent {

  doctors: DoctorDepartmentInfo[] = [];
  appointmentForm: AppointmentBooking = {appointmentDate: '', doctorId: 0, patientId: 0};
  date: string = "";
  time: string = "";

  constructor(private appointmentService: AppointmentService, private doctorService: DoctorService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getDoctors();
    console.log("Hello")
  }

  getDoctors() {
    let id = this.route.snapshot.paramMap.get('departmentId');
   
    this.doctorService.getDoctorsForBooking(id).subscribe({
      next: res => {
        this.doctors = res;
      },
      error: err => {
        this.router.navigate(['/error']);
      }
    })
  }

  selectDoctor(id: number) {
    this.appointmentForm.doctorId = id;
  }

  bookAppointment() {
      
    let id = this.route.snapshot.paramMap.get("patientId");
    this.appointmentForm.patientId = id;
    this.appointmentForm.appointmentDate = `${this.date}T${this.time}:00`;
    if(this.appointmentForm.doctorId != 0 && this.appointmentForm.appointmentDate != "") {
      this.appointmentService.createAppointment(this.appointmentForm).subscribe({
        next: res => {
          this.router.navigate(['/admin/patients/', id]);
        },
        error: err => {
          this.router.navigate(['/error']);
        }
      })
    }
  }

}
