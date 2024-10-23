import { TestBed } from '@angular/core/testing';

import { BooikingServiceService } from './booiking-service.service';

describe('BooikingServiceService', () => {
  let service: BooikingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooikingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
