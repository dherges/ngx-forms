import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormService } from './services/form.service';

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
        FormService,
      ]
    };
  }
}

export {
FormService,
}
