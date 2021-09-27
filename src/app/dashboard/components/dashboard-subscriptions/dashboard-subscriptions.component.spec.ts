import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSubscriptionsComponent } from './dashboard-subscriptions.component';

describe('DashboardSubscriptionsComponent', () => {
  let component: DashboardSubscriptionsComponent;
  let fixture: ComponentFixture<DashboardSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSubscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
