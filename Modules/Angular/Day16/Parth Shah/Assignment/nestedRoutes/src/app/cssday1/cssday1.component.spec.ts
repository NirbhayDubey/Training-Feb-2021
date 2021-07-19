import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssday1Component } from './cssday1.component';

describe('Cssday1Component', () => {
  let component: Cssday1Component;
  let fixture: ComponentFixture<Cssday1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssday1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssday1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
