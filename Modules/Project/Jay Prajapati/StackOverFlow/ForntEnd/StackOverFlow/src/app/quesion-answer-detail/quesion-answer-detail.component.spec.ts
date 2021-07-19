import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesionAnswerDetailComponent } from './quesion-answer-detail.component';

describe('QuesionAnswerDetailComponent', () => {
  let component: QuesionAnswerDetailComponent;
  let fixture: ComponentFixture<QuesionAnswerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesionAnswerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesionAnswerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
