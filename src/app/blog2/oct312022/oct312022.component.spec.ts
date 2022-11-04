import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct312022Component } from './oct312022.component';

describe('Oct312022Component', () => {
  let component: Oct312022Component;
  let fixture: ComponentFixture<Oct312022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct312022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct312022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
