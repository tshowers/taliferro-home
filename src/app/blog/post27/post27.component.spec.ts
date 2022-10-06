import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post27Component } from './post27.component';

describe('Post27Component', () => {
  let component: Post27Component;
  let fixture: ComponentFixture<Post27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post27Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
