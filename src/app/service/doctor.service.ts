import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pager } from '../model/model';
import { DoctorDepartmentInfo, DoctorDetail, DoctorRegisterForm, DoctorSummary, DoctorUpdateForm } from '../model/doctor.model';
import { environemnt } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  url: string = environemnt.url;

  constructor(private http: HttpClient) { }


  getDoctorSummaries(pageNumber: number, pageSize: number): Observable<Pager<DoctorSummary>> {
    let params = {pageNumber: pageNumber, pageSize: pageSize};
    return this.http.get<Pager<DoctorSummary>>(`${this.url}/admin/doctors`, {params: params});
  }

  getDoctorDetail(id: any): Observable<DoctorDetail> {
    return this.http.get<DoctorDetail>(`${this.url}/admin/doctors/${id}`);
  }

  getDoctorsForBooking(departmentId: any): Observable<DoctorDepartmentInfo[]> {
    return this.http.get<DoctorDepartmentInfo[]>(`${this.url}/admin/doctors/departments/${departmentId}`);
  }

  registerDoctor(form: DoctorRegisterForm): Observable<DoctorSummary> {
    return this.http.post<DoctorSummary>(`${this.url}/admin/doctors`, form);
  }

  updateDoctor(form: DoctorUpdateForm): Observable<DoctorSummary> {
    return this.http.patch<DoctorSummary>(`${this.url}/admin/doctors`, form);
  }

  removeDoctor(id: any) {
    return this.http.delete(`${this.url}/admin/doctors/${id}`);
  }

}
