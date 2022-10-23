import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct122022Component } from './oct122022.component';

describe('Oct122022Component', () => {
  let component: Oct122022Component;
  let fixture: ComponentFixture<Oct122022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct122022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct122022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
