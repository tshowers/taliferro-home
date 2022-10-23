import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileTrainingComponent } from './agile-training.component';

describe('AgileTrainingComponent', () => {
  let component: AgileTrainingComponent;
  let fixture: ComponentFixture<AgileTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgileTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgileTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
