import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwoPage1Component } from './child-two-page1.component';

describe('ChildTwoPage1Component', () => {
  let component: ChildTwoPage1Component;
  let fixture: ComponentFixture<ChildTwoPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTwoPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTwoPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
