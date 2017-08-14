import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NgxFormlyModule } from './modules/formly/formly.module'
import { NgxFormsService } from './services/ngx-forms.service'

import { NgxFormComponent } from './components/ngx-form.component'
import { NgxFormButtonsComponent } from './components/ngx-form-buttons.component'
import { NgxFormFieldsComponent } from './components/ngx-form-fields.component'
import { NgxFormHeaderComponent } from './components/ngx-form-header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormlyModule,
  ],
  declarations: [
    NgxFormComponent,
    NgxFormButtonsComponent,
    NgxFormFieldsComponent,
    NgxFormHeaderComponent,
  ],
  exports: [
    NgxFormComponent,
    NgxFormButtonsComponent,
    NgxFormFieldsComponent,
    NgxFormHeaderComponent,
  ]
})
export class NgxFormsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxFormsModule,
      providers: [
        NgxFormsService,
      ]
    }
  }
}
