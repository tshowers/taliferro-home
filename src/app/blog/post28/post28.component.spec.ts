import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post28Component } from './post28.component';

describe('Post28Component', () => {
  let component: Post28Component;
  let fixture: ComponentFixture<Post28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post28Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
