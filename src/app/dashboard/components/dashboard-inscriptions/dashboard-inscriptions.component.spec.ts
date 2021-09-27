import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInscriptionsComponent } from './dashboard-inscriptions.component';

describe('DashboardInscriptionsComponent', () => {
  let component: DashboardInscriptionsComponent;
  let fixture: ComponentFixture<DashboardInscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
