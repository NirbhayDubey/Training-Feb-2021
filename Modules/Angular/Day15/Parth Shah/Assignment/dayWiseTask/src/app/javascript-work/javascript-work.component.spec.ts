import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptWorkComponent } from './javascript-work.component';

describe('JavascriptWorkComponent', () => {
  let component: JavascriptWorkComponent;
  let fixture: ComponentFixture<JavascriptWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
