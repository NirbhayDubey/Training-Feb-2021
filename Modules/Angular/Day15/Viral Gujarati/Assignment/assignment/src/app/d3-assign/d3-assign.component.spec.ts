import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3AssignComponent } from './d3-assign.component';

describe('D3AssignComponent', () => {
  let component: D3AssignComponent;
  let fixture: ComponentFixture<D3AssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3AssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3AssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
