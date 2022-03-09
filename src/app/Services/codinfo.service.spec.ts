import { TestBed } from '@angular/core/testing';

import { CODInfoService } from './codinfo.service';

describe('ContentService', () => {
  let service: CODInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CODInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
