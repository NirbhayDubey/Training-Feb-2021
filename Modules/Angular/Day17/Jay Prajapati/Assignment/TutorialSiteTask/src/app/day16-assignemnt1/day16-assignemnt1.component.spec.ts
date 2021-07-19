import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16Assignemnt1Component } from './day16-assignemnt1.component';

describe('Day16Assignemnt1Component', () => {
  let component: Day16Assignemnt1Component;
  let fixture: ComponentFixture<Day16Assignemnt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16Assignemnt1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16Assignemnt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
