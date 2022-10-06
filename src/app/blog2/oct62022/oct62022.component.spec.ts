import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct62022Component } from './oct62022.component';

describe('Oct62022Component', () => {
  let component: Oct62022Component;
  let fixture: ComponentFixture<Oct62022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct62022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct62022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
