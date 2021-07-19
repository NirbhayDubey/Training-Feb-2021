import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7Assignemnt1Component } from './day7-assignemnt1.component';

describe('Day7Assignemnt1Component', () => {
  let component: Day7Assignemnt1Component;
  let fixture: ComponentFixture<Day7Assignemnt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7Assignemnt1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7Assignemnt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
