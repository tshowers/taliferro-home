import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post30Component } from './post30.component';

describe('Post30Component', () => {
  let component: Post30Component;
  let fixture: ComponentFixture<Post30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post30Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
