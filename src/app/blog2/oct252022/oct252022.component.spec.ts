import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct252022Component } from './oct252022.component';

describe('Oct252022Component', () => {
  let component: Oct252022Component;
  let fixture: ComponentFixture<Oct252022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct252022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct252022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
