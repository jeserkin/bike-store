import { TestBed } from '@angular/core/testing';

import { DayjsWrapperTestFailService } from './dayjs-wrapper-test-fail.service';
import { TranslateTestingModule } from 'ngx-translate-testing';

describe('DayjsWrapperTestFailService', () => {
  let service: DayjsWrapperTestFailService;

  const EMPTY_TRANSLATIONS = {['et']: {}, ['en']: {}};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateTestingModule.withTranslations(EMPTY_TRANSLATIONS)
      ]
    });
    service = TestBed.inject(DayjsWrapperTestFailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
