import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1CssComponent } from './day1-css.component';

describe('Day1CssComponent', () => {
  let component: Day1CssComponent;
  let fixture: ComponentFixture<Day1CssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day1CssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1CssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
