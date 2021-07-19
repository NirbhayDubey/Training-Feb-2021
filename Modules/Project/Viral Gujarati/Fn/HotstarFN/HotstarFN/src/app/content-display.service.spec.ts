import { TestBed } from '@angular/core/testing';

import { ContentDisplayService } from './content-display.service';

describe('ContentDisplayService', () => {
  let service: ContentDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
