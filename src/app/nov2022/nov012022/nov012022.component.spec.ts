import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov012022Component } from './nov012022.component';

describe('Nov012022Component', () => {
  let component: Nov012022Component;
  let fixture: ComponentFixture<Nov012022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov012022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov012022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
