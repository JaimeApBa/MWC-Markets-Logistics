import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictedSalesComponent } from './predicted-sales.component';

describe('PredictedSalesComponent', () => {
  let component: PredictedSalesComponent;
  let fixture: ComponentFixture<PredictedSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictedSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictedSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
