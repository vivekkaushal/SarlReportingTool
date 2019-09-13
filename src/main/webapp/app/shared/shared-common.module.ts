import { NgModule } from '@angular/core';

import { SaralReportingToolSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [SaralReportingToolSharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent],
  exports: [SaralReportingToolSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SaralReportingToolSharedCommonModule {}
