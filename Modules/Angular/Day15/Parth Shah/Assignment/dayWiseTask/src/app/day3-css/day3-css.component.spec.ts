import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3CssComponent } from './day3-css.component';

describe('Day3CssComponent', () => {
  let component: Day3CssComponent;
  let fixture: ComponentFixture<Day3CssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3CssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3CssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
