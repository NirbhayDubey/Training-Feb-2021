import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFile1Component } from './js-file1.component';

describe('JsFile1Component', () => {
  let component: JsFile1Component;
  let fixture: ComponentFixture<JsFile1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsFile1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsFile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
