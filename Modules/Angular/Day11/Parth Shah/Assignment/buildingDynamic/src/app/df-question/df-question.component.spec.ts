import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfQuestionComponent } from './df-question.component';

describe('DfQuestionComponent', () => {
  let component: DfQuestionComponent;
  let fixture: ComponentFixture<DfQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DfQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DfQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
