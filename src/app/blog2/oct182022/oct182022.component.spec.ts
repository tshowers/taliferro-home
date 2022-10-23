import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct182022Component } from './oct182022.component';

describe('Oct182022Component', () => {
  let component: Oct182022Component;
  let fixture: ComponentFixture<Oct182022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct182022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct182022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
