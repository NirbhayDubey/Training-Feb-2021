import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDay2Component } from './js-day2.component';

describe('JsDay2Component', () => {
  let component: JsDay2Component;
  let fixture: ComponentFixture<JsDay2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsDay2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
