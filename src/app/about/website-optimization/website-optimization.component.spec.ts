import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteOptimizationComponent } from './website-optimization.component';

describe('WebsiteOptimizationComponent', () => {
  let component: WebsiteOptimizationComponent;
  let fixture: ComponentFixture<WebsiteOptimizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteOptimizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
