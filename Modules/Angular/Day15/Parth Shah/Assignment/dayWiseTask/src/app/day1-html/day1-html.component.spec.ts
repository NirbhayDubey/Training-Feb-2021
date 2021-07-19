import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1HtmlComponent } from './day1-html.component';

describe('Day1HtmlComponent', () => {
  let component: Day1HtmlComponent;
  let fixture: ComponentFixture<Day1HtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day1HtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1HtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
