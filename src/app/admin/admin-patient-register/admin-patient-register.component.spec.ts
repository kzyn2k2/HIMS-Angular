import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPatientRegisterComponent } from './admin-patient-register.component';

describe('AdminPatientRegisterComponent', () => {
  let component: AdminPatientRegisterComponent;
  let fixture: ComponentFixture<AdminPatientRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPatientRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPatientRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
