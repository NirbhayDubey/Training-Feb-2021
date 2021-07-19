import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFileComponent } from './js-file.component';

describe('JsFileComponent', () => {
  let component: JsFileComponent;
  let fixture: ComponentFixture<JsFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
