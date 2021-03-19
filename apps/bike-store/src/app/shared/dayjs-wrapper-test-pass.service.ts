import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import * as en from 'dayjs/locale/en';
import * as et from 'dayjs/locale/et';
import * as ru from 'dayjs/locale/ru';
import { TranslateService } from '@ngx-translate/core';
import * as relativeTime from 'dayjs/plugin/relativeTime';

@Injectable({
  providedIn: 'root'
})
export class DayjsWrapperTestPassService {

  static readonly LANGUAGES = {
    en,
    et,
    ru
  };

  constructor(
    private translateService: TranslateService
  ) {
    dayjs.extend(relativeTime);
  }

  convertToUserFriendlyTimestamp(date: Date): string {
    const lang = DayjsWrapperTestPassService.LANGUAGES[this.translateService.currentLang];
    return dayjs(date).locale(lang).from(dayjs());
  }

  convertToWeekDayDateTimeFormat(date: Date): string {
    const lang = DayjsWrapperTestPassService.LANGUAGES[this.translateService.currentLang];
    return dayjs(date).locale(lang).format('dddd, DD. MMMM, HH:mm');
  }
}
