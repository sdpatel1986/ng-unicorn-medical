import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWeatherdataComponent } from './display-weatherdata.component';

describe('DisplayWeatherdataComponent', () => {
  let component: DisplayWeatherdataComponent;
  let fixture: ComponentFixture<DisplayWeatherdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayWeatherdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWeatherdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
