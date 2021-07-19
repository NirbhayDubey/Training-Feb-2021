import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17Assignemnt1Component } from './day17-assignemnt1.component';

describe('Day17Assignemnt1Component', () => {
  let component: Day17Assignemnt1Component;
  let fixture: ComponentFixture<Day17Assignemnt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17Assignemnt1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17Assignemnt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
