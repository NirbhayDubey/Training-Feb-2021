import { TestBed } from '@angular/core/testing';

import { QuestionAnswerDetailsService } from './question-answer-details.service';

describe('QuestionAnswerDetailsService', () => {
  let service: QuestionAnswerDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionAnswerDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
