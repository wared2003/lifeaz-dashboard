import { TestBed } from '@angular/core/testing';

import { DefibrillatorService } from './defibrillator.service';

describe('DefibrillatorService', () => {
  let service: DefibrillatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefibrillatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
