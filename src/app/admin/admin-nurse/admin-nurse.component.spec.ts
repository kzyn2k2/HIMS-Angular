import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNurseComponent } from './admin-nurse.component';

describe('AdminNurseComponent', () => {
  let component: AdminNurseComponent;
  let fixture: ComponentFixture<AdminNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNurseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
