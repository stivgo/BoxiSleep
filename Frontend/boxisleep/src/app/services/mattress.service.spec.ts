import { TestBed } from '@angular/core/testing';

import { MattressService } from './mattress.service';

describe('MattressService', () => {
  let service: MattressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MattressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
