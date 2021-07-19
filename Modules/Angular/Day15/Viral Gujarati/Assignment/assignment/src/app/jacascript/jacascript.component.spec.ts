import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacascriptComponent } from './jacascript.component';

describe('JacascriptComponent', () => {
  let component: JacascriptComponent;
  let fixture: ComponentFixture<JacascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JacascriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JacascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
