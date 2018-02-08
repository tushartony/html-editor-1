import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedPage2Component } from './nested-page2.component';

describe('NestedPage2Component', () => {
  let component: NestedPage2Component;
  let fixture: ComponentFixture<NestedPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
