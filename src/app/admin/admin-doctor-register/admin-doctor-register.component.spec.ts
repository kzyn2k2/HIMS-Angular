import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoctorRegisterComponent } from './admin-doctor-register.component';

describe('AdminDoctorRegisterComponent', () => {
  let component: AdminDoctorRegisterComponent;
  let fixture: ComponentFixture<AdminDoctorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDoctorRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDoctorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
