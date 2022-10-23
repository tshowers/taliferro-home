import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct282022Component } from './oct282022.component';

describe('Oct282022Component', () => {
  let component: Oct282022Component;
  let fixture: ComponentFixture<Oct282022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct282022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct282022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
