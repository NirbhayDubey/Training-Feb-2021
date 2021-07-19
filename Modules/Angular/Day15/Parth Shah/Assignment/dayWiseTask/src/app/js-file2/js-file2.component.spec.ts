import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFile2Component } from './js-file2.component';

describe('JsFile2Component', () => {
  let component: JsFile2Component;
  let fixture: ComponentFixture<JsFile2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsFile2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsFile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
