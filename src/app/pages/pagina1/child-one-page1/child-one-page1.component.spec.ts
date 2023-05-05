import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOnePage1Component } from './child-one-page1.component';

describe('ChildOnePage1Component', () => {
  let component: ChildOnePage1Component;
  let fixture: ComponentFixture<ChildOnePage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOnePage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildOnePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
