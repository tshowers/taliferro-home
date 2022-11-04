import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov022022Component } from './nov022022.component';

describe('Nov022022Component', () => {
  let component: Nov022022Component;
  let fixture: ComponentFixture<Nov022022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov022022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov022022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
