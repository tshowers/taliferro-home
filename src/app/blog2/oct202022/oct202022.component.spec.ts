import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct202022Component } from './oct202022.component';

describe('Oct202022Component', () => {
  let component: Oct202022Component;
  let fixture: ComponentFixture<Oct202022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct202022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct202022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
