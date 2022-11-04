import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov042022Component } from './nov042022.component';

describe('Nov042022Component', () => {
  let component: Nov042022Component;
  let fixture: ComponentFixture<Nov042022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov042022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov042022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
