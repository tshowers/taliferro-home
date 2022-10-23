import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct132022Component } from './oct132022.component';

describe('Oct132022Component', () => {
  let component: Oct132022Component;
  let fixture: ComponentFixture<Oct132022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct132022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct132022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
