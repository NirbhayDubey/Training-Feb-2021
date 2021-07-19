import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2CssComponent } from './day2-css.component';

describe('Day2CssComponent', () => {
  let component: Day2CssComponent;
  let fixture: ComponentFixture<Day2CssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day2CssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2CssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
