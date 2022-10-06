import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct102022Component } from './oct102022.component';

describe('Oct102022Component', () => {
  let component: Oct102022Component;
  let fixture: ComponentFixture<Oct102022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct102022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct102022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
