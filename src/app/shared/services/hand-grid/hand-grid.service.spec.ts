import { TestBed } from '@angular/core/testing';

import { HandGridService } from './hand-grid.service';

describe('HandGridService', () => {
  let service: HandGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
