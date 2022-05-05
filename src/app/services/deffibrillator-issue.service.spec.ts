import { TestBed } from '@angular/core/testing';

import { DeffibrillatorIssueService } from './deffibrillator-issue.service';

describe('DeffibrillatorIssueService', () => {
  let service: DeffibrillatorIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeffibrillatorIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
