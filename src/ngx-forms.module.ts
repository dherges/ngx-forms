import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxFormsService } from './services/ngx-forms.service';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
  ],
  exports: [

  ]
})
export class NgxFormsModule {
  static forRoot() {
    return {
      ngModule: NgxFormsModule,
      providers: [
        NgxFormsService,
      ]
    };
  }
}

export {
NgxFormsService,
}
