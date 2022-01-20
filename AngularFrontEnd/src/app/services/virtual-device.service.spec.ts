import { TestBed } from '@angular/core/testing';

import { VirtualDeviceService } from './virtual-device.service';

describe('VirtualDeviceService', () => {
  let service: VirtualDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
