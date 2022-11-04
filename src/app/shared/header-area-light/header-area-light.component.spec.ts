import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAreaLightComponent } from './header-area-light.component';

describe('HeaderAreaLightComponent', () => {
  let component: HeaderAreaLightComponent;
  let fixture: ComponentFixture<HeaderAreaLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAreaLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAreaLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
