import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientDetail, PatientRegisterForm, PatientSummary, PatientUpdateForm } from '../model/patient.model';
import { Observable } from 'rxjs';
import { environemnt } from '../../environment/environment';
import { Pager } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  url: string = environemnt.url;

  constructor(private http: HttpClient) { }

  registerPatient(form: PatientRegisterForm): Observable<PatientSummary> {
    return this.http.post<PatientSummary>(`${this.url}/admin/patients`, form);
  }

  updatePatient(form: PatientUpdateForm): Observable<PatientSummary> {
    return this.http.patch<PatientSummary>(`${this.url}/admin/patients`, form);
  }

  getPatientSummaries(pageNumber: number, pageSize: number): Observable<Pager<PatientSummary>> {
    let params = {pageNumber: pageNumber, pageSize: pageSize};
    return this.http.get<Pager<PatientSummary>>(`${this.url}/admin/patients`, {params: params});
  }

  getPatientDetail(id: any): Observable<PatientDetail> {
    return this.http.get<PatientDetail>(`${this.url}/admin/patients/${id}`);
  }
}
