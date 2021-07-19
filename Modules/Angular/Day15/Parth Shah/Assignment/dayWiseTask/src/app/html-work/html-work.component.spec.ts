import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlWorkComponent } from './html-work.component';

describe('HtmlWorkComponent', () => {
  let component: HtmlWorkComponent;
  let fixture: ComponentFixture<HtmlWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
