import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct172022Component } from './oct172022.component';

describe('Oct172022Component', () => {
  let component: Oct172022Component;
  let fixture: ComponentFixture<Oct172022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct172022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct172022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
