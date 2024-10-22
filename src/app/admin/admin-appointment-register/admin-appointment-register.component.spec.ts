import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppointmentRegisterComponent } from './admin-appointment-register.component';

describe('AdminAppointmentRegisterComponent', () => {
  let component: AdminAppointmentRegisterComponent;
  let fixture: ComponentFixture<AdminAppointmentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAppointmentRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAppointmentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
