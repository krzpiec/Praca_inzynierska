import { TestBed } from '@angular/core/testing';

import { HtppErrorInterceptor } from './htpp-error.interceptor';

describe('HtppErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HtppErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HtppErrorInterceptor = TestBed.inject(HtppErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
