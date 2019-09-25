import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStackoverflowComponent } from './display-stackoverflow.component';

describe('DisplayStackoverflowComponent', () => {
  let component: DisplayStackoverflowComponent;
  let fixture: ComponentFixture<DisplayStackoverflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayStackoverflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStackoverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
