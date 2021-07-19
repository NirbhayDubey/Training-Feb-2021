import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3PracComponent } from './d3-prac.component';

describe('D3PracComponent', () => {
  let component: D3PracComponent;
  let fixture: ComponentFixture<D3PracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3PracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3PracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
