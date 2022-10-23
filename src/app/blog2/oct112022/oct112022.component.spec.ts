import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct112022Component } from './oct112022.component';

describe('Oct112022Component', () => {
  let component: Oct112022Component;
  let fixture: ComponentFixture<Oct112022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct112022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct112022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
