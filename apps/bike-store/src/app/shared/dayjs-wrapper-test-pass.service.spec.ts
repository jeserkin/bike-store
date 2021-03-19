import { TestBed } from '@angular/core/testing';

import { DayjsWrapperTestPassService } from './dayjs-wrapper-test-pass.service';
import { TranslateTestingModule } from 'ngx-translate-testing';

describe('DayjsWrapperTestPassService', () => {
  let service: DayjsWrapperTestPassService;

  const EMPTY_TRANSLATIONS = {['et']: {}, ['en']: {}};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateTestingModule.withTranslations(EMPTY_TRANSLATIONS)
      ]
    });
    service = TestBed.inject(DayjsWrapperTestPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
