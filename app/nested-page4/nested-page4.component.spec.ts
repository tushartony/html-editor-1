import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedPage4Component } from './nested-page4.component';

describe('NestedPage4Component', () => {
  let component: NestedPage4Component;
  let fixture: ComponentFixture<NestedPage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedPage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
