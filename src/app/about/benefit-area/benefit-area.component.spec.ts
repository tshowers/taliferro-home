import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitAreaComponent } from './benefit-area.component';

describe('BenefitAreaComponent', () => {
  let component: BenefitAreaComponent;
  let fixture: ComponentFixture<BenefitAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
