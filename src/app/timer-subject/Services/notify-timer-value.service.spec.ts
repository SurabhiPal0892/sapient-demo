import { TestBed } from '@angular/core/testing';

import { NotifyTimerValueService } from './notify-timer-value.service';

describe('NotifyTimerValueService', () => {
  let service: NotifyTimerValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyTimerValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
