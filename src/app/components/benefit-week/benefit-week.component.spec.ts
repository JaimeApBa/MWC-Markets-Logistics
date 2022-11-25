import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitWeekComponent } from './benefit-week.component';

describe('BenefitWeekComponent', () => {
  let component: BenefitWeekComponent;
  let fixture: ComponentFixture<BenefitWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
