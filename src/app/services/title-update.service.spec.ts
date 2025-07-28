import { TestBed } from '@angular/core/testing';

import { TitleUpdateService } from './title-update.service';

describe('TitleUpdateService', () => {
  let service: TitleUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
