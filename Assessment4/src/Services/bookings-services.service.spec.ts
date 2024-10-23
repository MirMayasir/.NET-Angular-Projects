import { TestBed } from '@angular/core/testing';

import { BookingsServicesService } from './bookings-services.service';

describe('BookingsServicesService', () => {
  let service: BookingsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
