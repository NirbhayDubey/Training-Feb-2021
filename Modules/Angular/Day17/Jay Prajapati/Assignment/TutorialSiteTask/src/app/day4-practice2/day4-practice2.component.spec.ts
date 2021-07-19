import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4Practice2Component } from './day4-practice2.component';

describe('Day4Practice2Component', () => {
  let component: Day4Practice2Component;
  let fixture: ComponentFixture<Day4Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4Practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
