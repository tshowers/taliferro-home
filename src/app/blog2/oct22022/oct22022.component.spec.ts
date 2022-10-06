import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct22022Component } from './oct22022.component';

describe('Oct22022Component', () => {
  let component: Oct22022Component;
  let fixture: ComponentFixture<Oct22022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct22022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct22022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
