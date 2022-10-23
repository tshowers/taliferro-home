import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct272022Component } from './oct272022.component';

describe('Oct272022Component', () => {
  let component: Oct272022Component;
  let fixture: ComponentFixture<Oct272022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct272022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct272022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
