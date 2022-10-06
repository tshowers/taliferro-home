import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct92022Component } from './oct92022.component';

describe('Oct92022Component', () => {
  let component: Oct92022Component;
  let fixture: ComponentFixture<Oct92022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct92022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct92022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
