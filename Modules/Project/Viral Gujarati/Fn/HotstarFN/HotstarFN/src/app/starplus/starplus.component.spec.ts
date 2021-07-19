import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarplusComponent } from './starplus.component';

describe('StarplusComponent', () => {
  let component: StarplusComponent;
  let fixture: ComponentFixture<StarplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarplusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
