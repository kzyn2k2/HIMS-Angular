import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppointmentRegisterDepartmentComponent } from './admin-appointment-register-department.component';

describe('AdminAppointmentRegisterDepartmentComponent', () => {
  let component: AdminAppointmentRegisterDepartmentComponent;
  let fixture: ComponentFixture<AdminAppointmentRegisterDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAppointmentRegisterDepartmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAppointmentRegisterDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
