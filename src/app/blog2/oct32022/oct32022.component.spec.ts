import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct32022Component } from './oct32022.component';

describe('Oct32022Component', () => {
  let component: Oct32022Component;
  let fixture: ComponentFixture<Oct32022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct32022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct32022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
