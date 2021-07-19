import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFile3Component } from './js-file3.component';

describe('JsFile3Component', () => {
  let component: JsFile3Component;
  let fixture: ComponentFixture<JsFile3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsFile3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsFile3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
