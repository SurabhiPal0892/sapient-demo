import { TestBed } from '@angular/core/testing';

import { NotifyActionService } from './notify-action.service';

describe('NotifyActionService', () => {
  let service: NotifyActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
