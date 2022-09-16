import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbLightComponent } from './bread-crumb-light.component';

describe('BreadCrumbLightComponent', () => {
  let component: BreadCrumbLightComponent;
  let fixture: ComponentFixture<BreadCrumbLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadCrumbLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadCrumbLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
