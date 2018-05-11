import { TestBed, inject } from '@angular/core/testing';

import { OptimisticService } from './optimistic.service';

describe('OptimisticService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptimisticService]
    });
  });

  it('should be created', inject([OptimisticService], (service: OptimisticService) => {
    expect(service).toBeTruthy();
  }));
});
