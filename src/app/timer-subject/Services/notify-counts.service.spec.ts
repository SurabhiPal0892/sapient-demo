import { TestBed } from '@angular/core/testing';

import { NotifyCountsService } from './notify-counts.service';

describe('NotifyCountsService', () => {
  let service: NotifyCountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyCountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
