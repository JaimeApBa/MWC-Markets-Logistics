import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesWeekComponent } from './sales-week.component';

describe('SalesWeekComponent', () => {
  let component: SalesWeekComponent;
  let fixture: ComponentFixture<SalesWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
