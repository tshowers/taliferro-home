import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct12022Component } from './oct12022.component';

describe('Oct12022Component', () => {
  let component: Oct12022Component;
  let fixture: ComponentFixture<Oct12022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct12022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct12022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
