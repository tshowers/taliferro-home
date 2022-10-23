import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDesignComponent } from './data-design.component';

describe('DataDesignComponent', () => {
  let component: DataDesignComponent;
  let fixture: ComponentFixture<DataDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
