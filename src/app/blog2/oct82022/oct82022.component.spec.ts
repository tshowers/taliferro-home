import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct82022Component } from './oct82022.component';

describe('Oct82022Component', () => {
  let component: Oct82022Component;
  let fixture: ComponentFixture<Oct82022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct82022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct82022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
