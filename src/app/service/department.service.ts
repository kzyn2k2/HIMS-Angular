import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environemnt } from '../../environment/environment';
import { DepartmentDetail, DepartmentOption, DepartmentRegisterForm, DepartmentSummary, DepartmentUpdateForm } from '../model/department.model';
import { Observable } from 'rxjs';
import { Pager } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private url = environemnt.url;

  constructor(private http: HttpClient) { }

  getDepartmentList(pageNumber: number, pageSize: number): Observable<Pager<DepartmentSummary>> {
    const params = {pageNumber: pageNumber, pageSize: pageSize};
    return this.http.get<Pager<DepartmentSummary>>(`${this.url}/admin/departments`, {params: params});
  }

  getDepartmentDetail(id: any): Observable<DepartmentDetail> {
    return this.http.get<DepartmentDetail>(`${this.url}/admin/departments/${id}`);
  }

  getDepartmentOptions(): Observable<DepartmentOption[]> {
    return this.http.get<DepartmentOption[]>(`${this.url}/admin/departments/options`);
  }

  getDepartmentsForBooking(): Observable<DepartmentSummary[]> {
    return this.http.get<DepartmentSummary[]>(`${this.url}/admin/departments/bookings`);
  }

  registerDepartment(form: DepartmentRegisterForm): Observable<DepartmentSummary> {
    return this.http.post<DepartmentSummary>(`${this.url}/admin/departments`, form);
  }

  updateDepartment(form: DepartmentUpdateForm): Observable<DepartmentSummary> {
    return this.http.patch<DepartmentSummary>(`${this.url}/admin/departments`, form);
  }

  removeDepartment(id: number) {
    return this.http.delete(`${this.url}/admin/departments/id`);
  }
}
