import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'ngx-form-fields',
  template: `
    <formly-form [model]="item" [fields]="fields" [form]="form"></formly-form>
  `,
})
export class NgxFormFieldsComponent {
  @Input() form: FormGroup
  @Input() fields: any
  @Input() item: any
  @Output() action = new EventEmitter()
}
