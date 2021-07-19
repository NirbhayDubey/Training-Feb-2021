import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15Assignemnt1Component } from './day15-assignemnt1.component';

describe('Day15Assignemnt1Component', () => {
  let component: Day15Assignemnt1Component;
  let fixture: ComponentFixture<Day15Assignemnt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15Assignemnt1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15Assignemnt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
