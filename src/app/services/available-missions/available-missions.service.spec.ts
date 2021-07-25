import { TestBed } from '@angular/core/testing';

import { AvailableMissionsService } from './available-missions.service';

describe('AvailableMissionsService', () => {
  let service: AvailableMissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableMissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
