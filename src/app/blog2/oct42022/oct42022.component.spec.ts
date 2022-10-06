import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct42022Component } from './oct42022.component';

describe('Oct42022Component', () => {
  let component: Oct42022Component;
  let fixture: ComponentFixture<Oct42022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct42022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct42022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
