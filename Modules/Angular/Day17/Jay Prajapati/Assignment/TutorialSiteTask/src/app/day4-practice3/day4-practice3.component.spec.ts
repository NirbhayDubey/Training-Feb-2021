import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4Practice3Component } from './day4-practice3.component';

describe('Day4Practice3Component', () => {
  let component: Day4Practice3Component;
  let fixture: ComponentFixture<Day4Practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4Practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4Practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
