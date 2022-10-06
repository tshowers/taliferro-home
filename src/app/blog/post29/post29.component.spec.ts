import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post29Component } from './post29.component';

describe('Post29Component', () => {
  let component: Post29Component;
  let fixture: ComponentFixture<Post29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post29Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
