import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormBuilderComponent } from './book-form-builder.component';

describe('BookFormBuilderComponent', () => {
  let component: BookFormBuilderComponent;
  let fixture: ComponentFixture<BookFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
