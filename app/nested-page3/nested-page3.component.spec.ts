import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedPage3Component } from './nested-page3.component';

describe('NestedPage3Component', () => {
  let component: NestedPage3Component;
  let fixture: ComponentFixture<NestedPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
