import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4Assignemnt1Component } from './day4-assignemnt1.component';

describe('Day4Assignemnt1Component', () => {
  let component: Day4Assignemnt1Component;
  let fixture: ComponentFixture<Day4Assignemnt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4Assignemnt1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4Assignemnt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
