import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoctorUpdateComponent } from './admin-doctor-update.component';

describe('AdminDoctorUpdateComponent', () => {
  let component: AdminDoctorUpdateComponent;
  let fixture: ComponentFixture<AdminDoctorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDoctorUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDoctorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
