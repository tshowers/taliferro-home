import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAreaComponent } from './special-area.component';

describe('SpecialAreaComponent', () => {
  let component: SpecialAreaComponent;
  let fixture: ComponentFixture<SpecialAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
