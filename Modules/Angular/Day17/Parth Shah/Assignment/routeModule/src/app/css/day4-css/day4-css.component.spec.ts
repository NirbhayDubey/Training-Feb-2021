import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4CssComponent } from './day4-css.component';

describe('Day4CssComponent', () => {
  let component: Day4CssComponent;
  let fixture: ComponentFixture<Day4CssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4CssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4CssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
