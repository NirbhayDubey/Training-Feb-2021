import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1htmlComponent } from './day1html.component';

describe('Day1htmlComponent', () => {
  let component: Day1htmlComponent;
  let fixture: ComponentFixture<Day1htmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day1htmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1htmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
