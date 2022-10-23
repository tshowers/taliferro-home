import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct262022Component } from './oct262022.component';

describe('Oct262022Component', () => {
  let component: Oct262022Component;
  let fixture: ComponentFixture<Oct262022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct262022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct262022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
