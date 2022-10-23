import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct242022Component } from './oct242022.component';

describe('Oct242022Component', () => {
  let component: Oct242022Component;
  let fixture: ComponentFixture<Oct242022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct242022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct242022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
