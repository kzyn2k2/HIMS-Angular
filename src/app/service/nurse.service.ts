import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environemnt } from '../../environment/environment';
import { Observable } from 'rxjs';
import { Pager } from '../model/model';
import { NurseDetail, NurseRegisterForm, NurseSummary, NurseUpdateForm } from '../model/nurse.model';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  url: string = environemnt.url;

  constructor(private http: HttpClient) { }

  getNurseSummaries(pageNumber: number, pageSize: number): Observable<Pager<NurseSummary>>{
    return this.http.get<Pager<NurseSummary>>(`${this.url}/admin/nurses`);
  }

  getNurseDetail(id: any): Observable<NurseDetail> {
    return this.http.get<NurseDetail>(`${this.url}/admin/nurses/${id}`);
  }

  registerNurse(form: NurseRegisterForm): Observable<NurseSummary> {
    return this.http.post<NurseSummary>(`${this.url}/admin/nurses`, form);
  }

  updateNurse(form: NurseUpdateForm): Observable<NurseSummary> {
    return this.http.patch<NurseSummary>(`${this.url}/admin/nurses`, form);
  }

  removeNurse(id: any) {
    return this.http.delete(`${this.url}/admin/nurses/${id}`);
  }
}
