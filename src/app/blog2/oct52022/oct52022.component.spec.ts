import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct52022Component } from './oct52022.component';

describe('Oct52022Component', () => {
  let component: Oct52022Component;
  let fixture: ComponentFixture<Oct52022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct52022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct52022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
