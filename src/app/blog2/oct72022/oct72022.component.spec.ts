import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct72022Component } from './oct72022.component';

describe('Oct72022Component', () => {
  let component: Oct72022Component;
  let fixture: ComponentFixture<Oct72022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct72022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct72022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
