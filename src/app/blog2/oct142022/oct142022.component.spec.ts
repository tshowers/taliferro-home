import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct142022Component } from './oct142022.component';

describe('Oct142022Component', () => {
  let component: Oct142022Component;
  let fixture: ComponentFixture<Oct142022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct142022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct142022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
