import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environemnt } from '../../environment/environment';
import { Observable } from 'rxjs';
import { Pager } from '../model/model';
import { AppointmentBooking, AppointmentSummary, DoctorAppointmentSummary, PatientAppointmentSummary } from '../model/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  url: string = environemnt.url;

  constructor(private http: HttpClient) { }

  createAppointment(form: AppointmentBooking): Observable<AppointmentSummary> {
    return this.http.post<AppointmentSummary>(`${this.url}/admin/appointments`, form);
  }

  getBookedAppointmentsForPatient(id: any): Observable<Pager<PatientAppointmentSummary>> {
    return this.http.get<Pager<PatientAppointmentSummary>>(`${this.url}/admin/appointments/booked/patients/${id}`);
  }

  getFinishedAppointmentsForPatient(id: any): Observable<Pager<PatientAppointmentSummary>> {
    return this.http.get<Pager<PatientAppointmentSummary>>(`${this.url}/admin/appointments/finished/patients/${id}`);
  }

  getCanceledAppointmentsForPatient(id: any): Observable<Pager<PatientAppointmentSummary>> {
    return this.http.get<Pager<PatientAppointmentSummary>>(`${this.url}/admin/appointments/canceled/patients/${id}`);
  }

  getBookedAppointmentsForDoctor(id: any): Observable<Pager<DoctorAppointmentSummary>> {
    return this.http.get<Pager<DoctorAppointmentSummary>>(`${this.url}/admin/appointments/booked/doctors/${id}`);
  }

  getFinishedAppointmentsForDoctor(id: any): Observable<Pager<DoctorAppointmentSummary>> {
    return this.http.get<Pager<DoctorAppointmentSummary>>(`${this.url}/admin/appointments/finished/doctors/${id}`);
  }
  getCanceledAppointmentsForDoctor(id: any): Observable<Pager<DoctorAppointmentSummary>> {
    return this.http.get<Pager<DoctorAppointmentSummary>>(`${this.url}/admin/appointments/canceled/doctors/${id}`);
  }
}
