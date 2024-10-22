import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNurseRegisterComponent } from './admin-nurse-register.component';

describe('AdminNurseRegisterComponent', () => {
  let component: AdminNurseRegisterComponent;
  let fixture: ComponentFixture<AdminNurseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNurseRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminNurseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
