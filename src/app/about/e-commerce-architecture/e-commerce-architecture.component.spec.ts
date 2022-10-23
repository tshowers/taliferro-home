import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceArchitectureComponent } from './e-commerce-architecture.component';

describe('ECommerceArchitectureComponent', () => {
  let component: ECommerceArchitectureComponent;
  let fixture: ComponentFixture<ECommerceArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECommerceArchitectureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommerceArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
