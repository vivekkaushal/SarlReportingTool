import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SaralReportingToolSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SaralReportingToolSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SaralReportingToolSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SaralReportingToolSharedModule {
  static forRoot() {
    return {
      ngModule: SaralReportingToolSharedModule
    };
  }
}
