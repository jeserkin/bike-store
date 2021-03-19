import { Component } from '@angular/core';
import { DayjsWrapperTestPassService } from './shared/dayjs-wrapper-test-pass.service';
import { DayjsWrapperTestFailService } from './shared/dayjs-wrapper-test-fail.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'stores-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bike-store';

  constructor(
    private dayjsWrapperTestPassService: DayjsWrapperTestPassService,
    private dayjsWrapperTestFailService: DayjsWrapperTestFailService,
    private translateService: TranslateService
  ) {
    translateService.use('en');

    console.log('DayjsWrapperTestPassService', dayjsWrapperTestPassService.convertToUserFriendlyTimestamp(new Date()));
    console.log('DayjsWrapperTestFailService', dayjsWrapperTestFailService.convertToUserFriendlyTimestamp(new Date()));
  }
}
