import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct212022Component } from './oct212022.component';

describe('Oct212022Component', () => {
  let component: Oct212022Component;
  let fixture: ComponentFixture<Oct212022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct212022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct212022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
