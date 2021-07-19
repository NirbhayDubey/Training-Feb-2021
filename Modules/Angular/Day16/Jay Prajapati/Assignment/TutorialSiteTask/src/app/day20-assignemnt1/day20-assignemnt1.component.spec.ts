import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20Assignemnt1Component } from './day20-assignemnt1.component';

describe('Day20Assignemnt1Component', () => {
  let component: Day20Assignemnt1Component;
  let fixture: ComponentFixture<Day20Assignemnt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day20Assignemnt1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day20Assignemnt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
