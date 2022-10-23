import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct222022Component } from './oct222022.component';

describe('Oct222022Component', () => {
  let component: Oct222022Component;
  let fixture: ComponentFixture<Oct222022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct222022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct222022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
