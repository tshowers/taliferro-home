import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov032022Component } from './nov032022.component';

describe('Nov032022Component', () => {
  let component: Nov032022Component;
  let fixture: ComponentFixture<Nov032022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov032022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov032022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
