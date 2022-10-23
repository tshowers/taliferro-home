import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignProcessAreaComponent } from './design-process-area.component';

describe('DesignProcessAreaComponent', () => {
  let component: DesignProcessAreaComponent;
  let fixture: ComponentFixture<DesignProcessAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignProcessAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignProcessAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
