import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import dayjs from 'dayjs';
import en from 'dayjs/locale/en';
import et from 'dayjs/locale/et';
import ru from 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';

@Injectable({
  providedIn: 'root'
})
export class DayjsWrapperTestFailService {

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
    const lang = DayjsWrapperTestFailService.LANGUAGES[this.translateService.currentLang];
    return dayjs(date).locale(lang).from(dayjs());
  }

  convertToWeekDayDateTimeFormat(date: Date): string {
    const lang = DayjsWrapperTestFailService.LANGUAGES[this.translateService.currentLang];
    return dayjs(date).locale(lang).format('dddd, DD. MMMM, HH:mm');
  }
}
