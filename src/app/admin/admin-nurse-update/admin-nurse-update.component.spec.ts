import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNurseUpdateComponent } from './admin-nurse-update.component';

describe('AdminNurseUpdateComponent', () => {
  let component: AdminNurseUpdateComponent;
  let fixture: ComponentFixture<AdminNurseUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNurseUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminNurseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
