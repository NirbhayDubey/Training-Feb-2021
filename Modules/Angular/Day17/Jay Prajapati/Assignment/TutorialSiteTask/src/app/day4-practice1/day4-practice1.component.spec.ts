import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4Practice1Component } from './day4-practice1.component';

describe('Day4Practice1Component', () => {
  let component: Day4Practice1Component;
  let fixture: ComponentFixture<Day4Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4Practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
