import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyroneShowersComponent } from './tyrone-showers.component';

describe('TyroneShowersComponent', () => {
  let component: TyroneShowersComponent;
  let fixture: ComponentFixture<TyroneShowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyroneShowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyroneShowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
