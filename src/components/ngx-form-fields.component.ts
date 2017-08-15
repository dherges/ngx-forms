import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { NgxFormsService } from '../services/ngx-forms.service'
import { FormlyFieldConfig } from 'ng-formly'
import { NgxFormFields } from './ngx-form.interfaces'

@Component({
  selector: 'ngx-form-fields',
  template: `
    <formly-form [model]="item" [fields]="formlyFields" [form]="form"></formly-form>
  `,
})
export class NgxFormFieldsComponent implements OnChanges {

  @Input() form: FormGroup
  @Input() formlyFields: FormlyFieldConfig[] = []
  @Input() fields: NgxFormFields
  @Input() item: any
  @Output() action: EventEmitter<any> = new EventEmitter()

  constructor(private formsService: NgxFormsService) {}

  ngOnChanges(change) {
    if (change['fields']) {
      this.formlyFields = this.formsService.parseFields(this.fields)
    }
  }

}
