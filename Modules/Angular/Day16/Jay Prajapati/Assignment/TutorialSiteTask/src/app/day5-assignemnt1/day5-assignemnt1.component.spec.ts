import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5Assignemnt1Component } from './day5-assignemnt1.component';

describe('Day5Assignemnt1Component', () => {
  let component: Day5Assignemnt1Component;
  let fixture: ComponentFixture<Day5Assignemnt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5Assignemnt1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5Assignemnt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
