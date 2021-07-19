import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDay3Component } from './js-day3.component';

describe('JsDay3Component', () => {
  let component: JsDay3Component;
  let fixture: ComponentFixture<JsDay3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDay3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDay3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
