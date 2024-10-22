import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDepartmentsComponent } from './admin-departments.component';

describe('AdminDepartmentsComponent', () => {
  let component: AdminDepartmentsComponent;
  let fixture: ComponentFixture<AdminDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDepartmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
