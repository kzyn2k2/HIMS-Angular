import { Component } from '@angular/core';
import { DoctorDetail } from '../../model/doctor.model';
import { DoctorService } from '../../service/doctor.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LineChartOptions, Pager } from '../../model/model';
import { DoctorAppointmentSummary } from '../../model/appointment.model';
import { AppointmentService } from '../../service/appointment.service';
import { PaginatorComponent } from '../../util/paginator/paginator.component';

@Component({
  selector: 'app-admin-doctor',
  standalone: true,
  imports: [RouterLink, CommonModule, PaginatorComponent],
  templateUrl: './admin-doctor.component.html',
  styleUrl: './admin-doctor.component.scss'
})
export class AdminDoctorComponent {

  doctor!: DoctorDetail;
  appointmentChartOptions!: LineChartOptions;
  pageNumber: number = 0;
  pager!: Pager<DoctorAppointmentSummary>;
  appointments: DoctorAppointmentSummary[] = [];
  appointmentStatus: string = "booked";

  constructor(private doctorService: DoctorService, private appointmentService: AppointmentService, private route: ActivatedRoute, private router: Router) {
  

  }
  
  ngOnInit(): void {
    this.getDoctorDetail();
    this.getAppoinments();
  }

  getDoctorDetail() {
   let id = this.route.snapshot.paramMap.get('id');
   this.doctorService.getDoctorDetail(id).subscribe({
    next: (doctorDetail) => {
      this.doctor = doctorDetail;
    }
   })
  }

  getAppoinments() { 
    let id = this.route.snapshot.paramMap.get("id");
    if(this.appointmentStatus == "booked") {
      this.appointmentService.getBookedAppointmentsForDoctor(id).subscribe({
        next: pager => {
          this.pager = pager;
          this.appointments = pager.data;
        }
      })
    }else if(this.appointmentStatus == "finished") {
      this.appointmentService.getFinishedAppointmentsForDoctor(id).subscribe({
        next: pager => {
          this.pager = pager;
          this.appointments = pager.data;
        }
      })
    }else{
      this.appointmentService.getCanceledAppointmentsForDoctor(id).subscribe({
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

  removeDoctor() {
    this.doctorService.removeDoctor(this.doctor.id).subscribe({
      next: res => {
        this.router.navigate(['/admin/doctors']);
      }
    })
  }

  initializeChart() {
    this.appointmentChartOptions = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      }
    };
  }

}
