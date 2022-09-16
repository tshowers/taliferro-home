import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyroneShowersBioComponent } from './tyrone-showers-bio.component';

describe('TyroneShowersBioComponent', () => {
  let component: TyroneShowersBioComponent;
  let fixture: ComponentFixture<TyroneShowersBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyroneShowersBioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TyroneShowersBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
