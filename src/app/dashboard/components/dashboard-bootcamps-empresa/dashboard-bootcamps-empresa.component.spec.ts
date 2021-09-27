import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBootcampsEmpresaComponent } from './dashboard-bootcamps-empresa.component';

describe('DashboardBootcampsEmpresaComponent', () => {
  let component: DashboardBootcampsEmpresaComponent;
  let fixture: ComponentFixture<DashboardBootcampsEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBootcampsEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBootcampsEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
