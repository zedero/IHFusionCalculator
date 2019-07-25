import { TestBed } from '@angular/core/testing';

import { OwnedService } from './owned.service';

describe('OwnedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwnedService = TestBed.get(OwnedService);
    expect(service).toBeTruthy();
  });
});
