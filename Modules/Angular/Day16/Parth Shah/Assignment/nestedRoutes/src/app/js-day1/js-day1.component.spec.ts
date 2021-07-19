import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDay1Component } from './js-day1.component';

describe('JsDay1Component', () => {
  let component: JsDay1Component;
  let fixture: ComponentFixture<JsDay1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDay1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
