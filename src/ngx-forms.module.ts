import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { FormlyModule, FormlyBootstrapModule } from 'ng-formly'

import { NgxFormComponent } from './components/form/ngx-form.component'
import { NgxFormsService } from './services/ngx-forms.service'

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
  ],
  declarations: [
    NgxFormComponent,
  ],
  exports: [
    NgxFormComponent,
  ]
})
export class NgxFormsModule {
  static forRoot() {
    return {
      ngModule: NgxFormsModule,
      providers: [
        NgxFormsService,
      ]
    }
  }
}

export {
NgxFormsService,
}
