import { TestBed } from '@angular/core/testing';

import { IconDataService } from './icon-data.service';

describe('IconDataService', () => {
  let service: IconDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
