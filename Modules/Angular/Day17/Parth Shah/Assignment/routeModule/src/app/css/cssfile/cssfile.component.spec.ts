import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssfileComponent } from './cssfile.component';

describe('CssfileComponent', () => {
  let component: CssfileComponent;
  let fixture: ComponentFixture<CssfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
