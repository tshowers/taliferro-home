import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerArea2Component } from './banner-area2.component';

describe('BannerArea2Component', () => {
  let component: BannerArea2Component;
  let fixture: ComponentFixture<BannerArea2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerArea2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerArea2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
