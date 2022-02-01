import { TestBed } from '@angular/core/testing';

import { LanguageInterceptorsInterceptor } from './language-interceptors.interceptor';

describe('LanguageInterceptorsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LanguageInterceptorsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LanguageInterceptorsInterceptor = TestBed.inject(LanguageInterceptorsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
