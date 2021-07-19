import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssWorkComponent } from './css-work.component';

describe('CssWorkComponent', () => {
  let component: CssWorkComponent;
  let fixture: ComponentFixture<CssWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
