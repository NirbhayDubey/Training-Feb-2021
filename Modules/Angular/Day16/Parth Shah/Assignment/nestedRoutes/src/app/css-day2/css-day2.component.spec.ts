import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Component } from './css-day2.component';

describe('CssDay2Component', () => {
  let component: CssDay2Component;
  let fixture: ComponentFixture<CssDay2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssDay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
