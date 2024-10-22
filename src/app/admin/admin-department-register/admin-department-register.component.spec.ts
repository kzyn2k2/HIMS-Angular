import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDepartmentRegisterComponent } from './admin-department-register.component';

describe('AdminDepartmentRegisterComponent', () => {
  let component: AdminDepartmentRegisterComponent;
  let fixture: ComponentFixture<AdminDepartmentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDepartmentRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDepartmentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
