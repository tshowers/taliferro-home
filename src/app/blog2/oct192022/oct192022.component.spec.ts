import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct192022Component } from './oct192022.component';

describe('Oct192022Component', () => {
  let component: Oct192022Component;
  let fixture: ComponentFixture<Oct192022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct192022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct192022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
