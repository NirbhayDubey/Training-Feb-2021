import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Assignemnt1Component } from './day3-assignemnt1.component';

describe('Day3Assignemnt1Component', () => {
  let component: Day3Assignemnt1Component;
  let fixture: ComponentFixture<Day3Assignemnt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3Assignemnt1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3Assignemnt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
