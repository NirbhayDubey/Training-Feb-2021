import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay3Component } from './css-day3.component';

describe('CssDay3Component', () => {
  let component: CssDay3Component;
  let fixture: ComponentFixture<CssDay3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssDay3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
